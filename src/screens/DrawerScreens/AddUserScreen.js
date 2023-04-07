import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Octicons"
import axios from 'axios'
import { useSelector } from 'react-redux'
import FollowCard from '../../components/FollowCard'

const AddUserScreen = ({ navigation }) => {
    const { token } = useSelector(state => state.user.userTokenInfo);
    const [usersList, setUserList] = useState([])

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate("followUnfollow")} style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="arrow-left" size={25} color={"white"} />
                </TouchableOpacity>,
            headerTitle: () => <Text numberOfLines={1} style={{ color: "white", fontSize: 20, maxWidth: 100, fontWeight: "600" }}>Connect</Text>,


        })
    }, [navigation])

    const getUsers = async () => {

        try {
            const { data } = await axios.get('https://missingdata.pythonanywhere.com/users', {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            });
            console.log("res", data)
            if (data) {
                setUserList(data.users)
            }
            console.log(data)
        } catch (e) {

        }

    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Suggested for you</Text>

            <Text>AddUserScreen</Text>
            <FlatList
                data={usersList}
                renderItem={({ item }) => <FollowCard id={item.id} username={item.username} email={item.email} />}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

export default AddUserScreen
const styles = StyleSheet.create({
    title: { fontSize: 20, fontWeight: "600", color: "white" }
})