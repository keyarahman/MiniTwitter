import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Octicons"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FollowingSceen from '../TopTabScreens/FollowingSceen';

const TopTab = createMaterialTopTabNavigator();
const FollowUnfolloScreen = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="arrow-left" size={25} color={"white"} />
                </TouchableOpacity>,
            headerTitle: () => <Text numberOfLines={1} style={{ color: "white", fontSize: 20, maxWidth: 100 }}>keya</Text>,
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate("adduser")
                } style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="person-add" size={25} color={"white"} />
                </TouchableOpacity >

        })
    }, [navigation])

    return (
        <View style={{ flex: 1 }}>

            <TopTab.Navigator
                initialRouteName="For you"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "700", textTransform: "none" },
                    tabBarStyle: { backgroundColor: 'black', borderBottomWidth: .2, borderColor: "gray" },
                }}
            >
                <TopTab.Screen name="Followers" component={FollowingSceen} />
                <TopTab.Screen name="Following" component={FollowingSceen} />
            </TopTab.Navigator>
        </View>
    )
}

export default FollowUnfolloScreen