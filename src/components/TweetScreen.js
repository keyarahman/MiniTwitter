import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateTweetsList } from '../redux/AuthSlice';

const TweetScreen = () => {
    const { token } = useSelector(state => state.user.userTokenInfo);
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [tweet, setTweet] = useState('');

    const handleTweet = async () => {

        try {
            const { data } = await axios.post('https://missingdata.pythonanywhere.com/tweet', { content: tweet }, {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            console.log("res", data)
            if (data?.message === "successfully created tweet") {
                setTweet('');
                dispatch(updateTweetsList())
                navigation.navigate("For you")
            } else {
                Alert.alert("Something went wrong. Please try again later")
            }
        } catch (e) {

        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTweet} disabled={!tweet} >
                    <Text style={[styles.tweetButton, { backgroundColor: !tweet ? "#b3b3cc" : '#1DA1F2' }]} >Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Image source={{ uri: 'https://via.placeholder.com/50x50.png?text=DP' }} style={styles.dp} />
                <TextInput
                    style={styles.textInput}
                    multiline
                    maxLength={280}
                    placeholder="What's happening?"
                    placeholderTextColor={"gray"}
                    value={tweet}
                    onChangeText={(text) => setTweet(text)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        color: '#1DA1F2',
        fontWeight: 'bold',
        fontSize: 16,
    },
    tweetButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: '#1DA1F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        overflow: 'hidden',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 30,
        borderWidth: .25,
        borderColor: "gray",
        padding: 10,

        height: 280, borderRadius: 10
    },
    dp: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 24,
        color: "white"
    },
});

export default TweetScreen;
