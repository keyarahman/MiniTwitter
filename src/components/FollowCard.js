import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, useColorScheme, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const FollowCard = ({ id, email, username }) => {
    const textColor = '#fff'
    const backgroundColor = '#000'
    const [isLoading, setLoading] = useState(false)
    const [isFollow, setIsFollow] = useState(false)

    const { token } = useSelector(state => state.user.userTokenInfo);

    const followUnfollow = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post(`https://missingdata.pythonanywhere.com/${isFollow ? "unfollow" : "follow"}`, { "user_id": id }, {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            if (data) {
                setIsFollow(!isFollow)
            }
            console.log("res", data)
        } catch (e) {
            console.log(e)
        }
        setLoading(false)

    }

    return (
        <View >
            <View style={[styles.container, { backgroundColor }]}>
                <Image style={styles.avatar} source={{ uri: "https://via.placeholder.com/50x50.png?text=DP" }} />
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={[styles.name, { color: textColor, maxWidth: 180 }]}>{username}</Text>
                    <Text numberOfLines={1} style={[styles.username, { color: textColor, maxWidth: 180 }]}>{email}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]} onPress={followUnfollow}>
                        {isLoading
                            ? <ActivityIndicator color={"black"} /> :
                            <Text style={[styles.buttonText, { color: "black" }]}>{isFollow ? "Following" : "Follow"}</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,
        flex: 1,
        marginVertical: 2
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    username: {
        fontSize: 14,
        marginTop: 4,
    },
    buttonContainer: {
        width: 80,
    },
    button: {
        borderRadius: 20,
        padding: 6,
        // paddingHorizontal: 12,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default FollowCard;
