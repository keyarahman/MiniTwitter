import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const NotificationScreen = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
                Be the first to know
            </Text>
            <Text style={{ color: 'gray', fontSize: 17, fontWeight: '500' }}>
                Notification about new tweets,Retweets, recommendation, and more will
                show up here as you folloe more people
            </Text>
        </SafeAreaView>
    );
};

export default NotificationScreen;
