import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import TweetCard from '../../components/TweetCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TimeLine = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const { token } = useSelector(state => state.user.userTokenInfo);
    const updateFollowAndFollowingListStatus = useSelector(
        state => state.user.updateFollowAndFollowingList,
    );

    const getTweets = async () => {
        try {
            const { data } = await axios.get(
                'https://missingdata.pythonanywhere.com/timeline',
                {
                    headers: {
                        'X-Jwt-Token': `Bearer ${token}`,
                    },
                },
            );
            // console.log("res", data)
            setPosts(data.timeline);
            console.log(data);
        } catch (e) { }
    };

    useEffect(() => {
        getTweets();
    }, [updateFollowAndFollowingListStatus]);

    React.useEffect(() => {
        navigation.setOptions({
            headerBackground: () => (
                <View style={{ flex: 1, backgroundColor: 'black' }} />
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={{
                            uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                        }}
                        style={{ height: 32, width: 32, borderRadius: 20, left: 10 }}
                    />
                </TouchableOpacity>
            ),

            headerTitle: () => (
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png',
                    }}
                    style={{ height: 20, width: 20 }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, position: 'relative' }}>

            <FlatList
                contentContainerStyle={{ paddingVertical: 16 }}
                data={posts}
                renderItem={({ item }) => (
                    <TweetCard
                        username={item.user.username}
                        email={item.user.email}
                        tweet={item.content}
                    />
                )}
                ListEmptyComponent={() => <View style={{ height: 500, width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontSize: 16 }}>No recent tweets to display</Text>
                </View>}
                keyExtractor={item => item.id}
                ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
            />

        </View>
    );
};

export default TimeLine;
