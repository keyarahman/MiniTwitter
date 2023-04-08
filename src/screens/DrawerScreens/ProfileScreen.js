import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView, Pressable, ActivityIndicator } from 'react-native';
import Icon from "react-native-vector-icons/Octicons"
import TweetCard from '../../components/TweetCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UpdateFollowAndFollowingInfo, UpdateFollowerInfo, UpdateFollowingInfo } from '../../redux/AuthSlice';

const ProfileScreen = ({ navigation }) => {
    const isTweetListUpdate = useSelector(state => state.user.updateTweetsList)
    const { token } = useSelector(state => state.user.userTokenInfo);
    const { email } = useSelector(state => state.user.userInfo)
    console.log("emil", email)
    const [tweetList, setTweetList] = useState([])
    const [followingList, setFollowingList] = useState([])
    const [followersList, setFollowerList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const updateFollowAndFollowingListStatus = useSelector(state => state.user.updateFollowAndFollowingList)
    const dispatch = useDispatch()
    const getFollwingList = async () => {

        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/following', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            console.log("res", data.followings)
            if (data) {
                setFollowingList(data?.followings)
                dispatch(UpdateFollowingInfo(data?.followings))
            }

        } catch (e) {
            console.log(e)

        }
    }
    const getFollowerList = async () => {

        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/followers', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            console.log("res", data.followers)
            if (data) {
                setFollowerList(data?.followers)
                dispatch(UpdateFollowerInfo(data?.followers))

            }

        } catch (e) {
            console.log(e)

        }
    }

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

        setIsLoading(false)
    }
    useEffect(() => {
        getMyTweets()

    }, [isTweetListUpdate])

    useEffect(() => {
        getFollwingList()
        getFollowerList()
    }, [updateFollowAndFollowingListStatus])

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="arrow-left" size={25} color={"white"} />
                </TouchableOpacity>,
            headerTitle: () => <Text numberOfLines={1} style={{ color: "white", fontSize: 20, maxWidth: 100 }}>Profile</Text>,


        })
    }, [navigation])
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ?
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator color={"white"} />
                </View> :
                <FlatList
                    data={tweetList}
                    renderItem={({ item }) =>

                        < TweetCard username={item.user.username} email={item.user.email} tweet={item.content} />
                    }
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => <View style={{ height: 200, width: "100%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "white", fontSize: 14, fontWeight: "500", paddingHorizontal: 30 }}>No recent tweets to display</Text>
                    </View>}
                    ListHeaderComponent={() => (
                        <View style={styles.header}>
                            <View style={styles.profile}>
                                <Image
                                    source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }}
                                    style={styles.profileImage}
                                />
                                <View style={styles.profileInfo}>
                                    <Text style={styles.profileName}></Text>
                                    <Text style={styles.profileUsername}>{email}</Text>
                                </View>
                            </View>
                            <View style={styles.stats} >
                                <TouchableOpacity onPress={() => navigation.navigate("followAndUnfollow", {
                                    screen: "Following"
                                })} style={styles.stat}>
                                    <Text style={styles.statNumber}>{followingList.length}</Text>
                                    <Text style={styles.statLabel}>Following</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("followAndUnfollow", {
                                    screen: "Followers"
                                })} style={styles.stat}>
                                    <Text style={styles.statNumber}>{followersList.length}</Text>
                                    <Text style={styles.statLabel}>Followers</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: "white", marginTop: 15, fontSize: 20, fontWeight: "600" }}>Tweet</Text>
                        </View>
                    )}
                />}
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