import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import TweetCard from '../../components/TweetCard'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FollowCard from '../../components/FollowCard';

const TimeLine = () => {
    const [usersList, setUserList] = useState([])
    const { token } = useSelector(state => state.user.userTokenInfo);

    const getTweets = async () => {

        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/timeline', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            // console.log("res", data)
        } catch (e) {

        }

    }
    const getUsers = async () => {

        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/users', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });

            setUserList(data.users)
        }
        catch (e) {
        }

    }

    useEffect(() => {
        getTweets()
        getUsers()
    }, [])


    const renderUserItem = ({ item, index }) => {
        if (index > 2) return <></>
        return (
            <FollowCard
                id={item?.id}
                name={item.username}
                username={item.email}
            />
        )
    }
    const tweet = 'Check out this awesome photo I took on my vacation! #travel'

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={usersList}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
            />
            <FlatList
                data={usersList}
                renderItem={(item) =>
                    < TweetCard username={item.username} email={item.email} tweet={item?.tweet ? item?.tweet : tweet} />

                }
                keyExtractor={(item) => item.id}
                ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
            />
        </ScrollView>

    )
}

export default TimeLine
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000',
    },
});