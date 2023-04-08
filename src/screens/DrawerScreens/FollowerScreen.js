import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const FollowerScreen = () => {

    const followerList = useSelector(state => state.user.userfollowersList)
    return (

        <SafeAreaView style={{ flex: 1, top: 20, marginHorizontal: 10 }}>
            {followerList?.length > 0 ?
                <FlatList
                    data={followerList}
                    renderItem={({ item }) => <FollowCard id={item.id} username={item.username} email={item.email} />}
                    keyExtractor={(item) => item.id}
                />
                :
                <View>
                    <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>Looking for followers?</Text>
                    <Text style={{ color: "gray", fontSize: 17, fontWeight: "500" }}>When someone follow this account, then they'll show up here. Teetting and interactiong with others helps boost followers.</Text>
                </View>}

        </SafeAreaView>

    )
}

export default FollowerScreen