import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import TweetCard from '../../components/TweetCard';

const FollowerScreen = () => {
    const data = {
        username: 'John Doe',
        tweet: 'Check out this awesome photo I took on my vacation! #travel',

    };
    return (
        <ScrollView style={styles.container}>
            <TweetCard data={data} />
            <TweetCard data={data} />
        </ScrollView>
    )
}

export default FollowerScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});