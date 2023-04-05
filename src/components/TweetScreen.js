import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TweetScreen = () => {
    const navigation = useNavigation()
    const [tweet, setTweet] = useState('');

    const handleTweet = () => {
        // Code to post the tweet to Twitter API
        console.log('Posting tweet: ', tweet);
        AsyncStorage.getItem("token").then(token => {
            console.log("toke", token)

        })


        setTweet('');
        navigation.navigate("For you")
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
