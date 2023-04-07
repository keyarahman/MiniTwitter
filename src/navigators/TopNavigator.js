import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeLine from '../screens/TopTabScreens/TimeLine';
import FollowingSceen from '../screens/TopTabScreens/FollowingSceen';
import NewsUpdateScreen from '../screens/TopTabScreens/NewsUpdateScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabs = ({ navigation }) => {

    React.useEffect(() => {

        navigation.setOptions({

            headerBackground: () => <View style={{ flex: 1, backgroundColor: 'black' }} />,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={{ uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" }} style={{ height: 40, width: 40, borderRadius: 20, left: 10 }} />
                </TouchableOpacity>,

            headerTitle: () =>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png" }} style={{ height: 25, width: 30 }} />
        })
    }, [navigation])

    return (
        <View style={{ flex: 1, position: 'relative', }}>

            <TopTab.Navigator
                initialRouteName="For you"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "700", textTransform: "none" },
                    tabBarStyle: { backgroundColor: 'black', borderBottomWidth: .2, borderColor: "gray" },
                }}
            >
                <TopTab.Screen name="For you" component={TimeLine} />
                <TopTab.Screen name="Following" component={FollowingSceen} />
                <TopTab.Screen name="News Update" component={NewsUpdateScreen} />
            </TopTab.Navigator>

            <TouchableOpacity
                onPress={() => navigation.navigate("Tweet")}
                style={{ width: 50, height: 50, alignItems: 'center', justifyContent: "center", backgroundColor: "#00acee", borderRadius: 25, position: "absolute", bottom: 16, right: 16 }}>
                <MaterialCommunityIcons name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>

    );
}

export default TopTabs


