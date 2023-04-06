import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import TweetCard from '../../components/TweetCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

const FollowingSceen = () => {
    const { token } = useSelector(state => state.user.userTokenInfo);
    const [followingList, setFollowingList] = useState([])

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
            }

        } catch (e) {
            console.log(e)

        }
    }

    useEffect(() => {
        getFollwingList()
    }, [token])

    const tweet = 'Check out this awesome photo I took on my vacation! #travel'
    const renderItem = ({ item, index }) => {

        return (
            < TweetCard username={item.username} email={item.email} tweet={item?.tweet ? item?.tweet : tweet} />
        )
    }
    return (
        <ScrollView style={styles.container}>

            {followingList?.length > 0 ?
                // <>
                //     {followingList.map(({ item, index }) => {
                //         < TweetCard username={item?.username} email={item?.email} tweet={item?.tweet ? item?.tweet : tweet} />

                //     })}
                // </>

                <FlatList
                    data={followingList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
                />
                :
                <><Text style={{ color: "#fff" }}>No data </Text></>
            }

        </ScrollView>
    )

}
export default FollowingSceen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});