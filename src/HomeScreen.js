import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const getToken = async () => {
        const token = await AsyncStorage.getItem("token")

        if (!token) {
            navigation.navigate("LogIn")
        }
    }
    useEffect(() => {
        getToken()
    }, [])
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen