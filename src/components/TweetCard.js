import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
export default function TweetCard({ username, email, tweet }) {

    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4rdi7yIcgCYMI76dCj_182YiiGyPN-TXzQ&usqp=CAU" }} style={styles.profileImage} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.time}>2h ago</Text>
                </View>
                <Text style={styles.tweet}>{tweet}</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=600&q=80' }} style={styles.tweetImage} />
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="message1" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="retweet" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>23</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="hearto" size={20} color="#8899a6" />
                        <Text style={styles.iconText}>{12}</Text>
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
