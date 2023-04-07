import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const MessageScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>Welcome to your Inbox!</Text>
            <Text style={{ color: "gray", fontSize: 17, fontWeight: "500" }}>Drop a line ,share Tweets and more with private conversations between you and others on Twitter.</Text>
        </SafeAreaView>
    )
}

export default MessageScreen