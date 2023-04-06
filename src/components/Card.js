import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
export default function Card({ data }) {
    const { username, tweet, image, time, retweets, likes, tweetImage } = data;

    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <Image source={image} style={styles.profileImage} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={styles.tweet}>{tweet}</Text>
                <Image source={tweetImage} style={styles.tweetImage} />
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="message1" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="retweet" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>{retweets}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="hearto" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>{likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="sharealt" size={20} color="#8899a6" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#38444d',
        backgroundColor: '#0000',
    },
    leftContainer: {
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 5,
        color: '#fff',
    },
    time: {
        fontSize: 14,
        color: '#8899a6',
    },
    tweet: {
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 5,
        color: '#fff',
    },
    tweetImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#8899a6',
    },
});
