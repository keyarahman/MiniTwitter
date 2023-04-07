import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Icon from "react-native-vector-icons/Octicons"
import TweetCard from '../../components/TweetCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = ({ navigation }) => {
    const { token } = useSelector(state => state.user.userTokenInfo);
    const [tweetList, setTweetList] = useState([])


    React.useEffect(() => {

        navigation.setOptions({

            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="arrow-left" size={25} color={"white"} />
                </TouchableOpacity>,

        })
    }, [navigation])
    const getMyTweets = async () => {
        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/my-tweets', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            console.log("res", data)
            if (data) {
                setTweetList(data.my_tweets)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMyTweets()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tweetList}
                renderItem={({ item }) =>
                    < TweetCard username={item.user.username} email={item.user.email} tweet={item.content} />
                }
                keyExtractor={(item) => item.id}
                ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <View style={styles.profile}>
                            <Image
                                source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }}
                                style={styles.profileImage}
                            />
                            <View style={styles.profileInfo}>
                                <Text style={styles.profileName}>John Doe</Text>
                                <Text style={styles.profileUsername}>@johndoe</Text>
                            </View>
                        </View>
                        <Pressable style={styles.stats} onPress={() => navigation.navigate("followUnfollow")}>
                            <View style={styles.stat}>
                                <Text style={styles.statNumber}>123</Text>
                                <Text style={styles.statLabel}>Following</Text>
                            </View>
                            <View style={styles.stat}>
                                <Text style={styles.statNumber}>456</Text>
                                <Text style={styles.statLabel}>Followers</Text>
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        padding: 16
    },
    profile: {
        margin: 5,
        marginVertical: 15
    },
    profileImage: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginRight: 16, marginVertical: 16
    },
    profileInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        // marginBottom: 4,
    },
    profileUsername: {
        fontSize: 16,
        color: '#8899A6',
    },
    stats: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    stat: {
        // marginLeft: 16,
        flexDirection: "row",
        paddingHorizontal: 5, alignItems: "center"
    },
    statNumber: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    statLabel: {
        fontSize: 14,
        color: '#8899A6',
        paddingLeft: 5
    },
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#38444D',
    },
    tabIcon: {
        marginRight: 16,
    },
    tweets: {
        paddingVertical: 10, paddingHorizontal: 5

    }, tweetsHeading: {
        color: "white", fontSize: 18, fontWeight: "bold",
    }
})
export default ProfileScreen