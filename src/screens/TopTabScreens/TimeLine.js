import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TimeLine = () => {

    const { token } = useSelector(state => state.user.userTokenInfo);
    const data = {
        username: 'John Doe',
        tweet: 'Check out this awesome photo I took on my vacation! #travel',
        image: { uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" },
        tweetImage: { uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=600&q=80' },
        time: '2h ago',
        retweets: 12,
        likes: 23,
    };

    const getTweets = async () => {

        const { data } = await axios.get('https://missingdata.pythonanywhere.com/timeline', {
            headers: {
                'X-Jwt-Token': `Bearer ${token}`
            }
        });
        console.log("res", data)

    }

    useEffect(() => {
        getTweets()
    }, [])


    return (
        <ScrollView>
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />

        </ScrollView>

    )
}

export default TimeLine