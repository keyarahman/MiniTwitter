import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopTabs from './TopNavigator';
import Search from 'react-native-vector-icons/AntDesign';
import Notify from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserSearchScreen from '../screens/BottomTabScreens/SearchScreen';
import NotificationScreen from '../screens/BottomTabScreens/NotificationScreen';
import MessageScreen from '../screens/BottomTabScreens/MessageScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                tabBarStyle: { borderTopWidth: 1, borderColor: "gray", backgroundColor: "black" }
            }}
        >
            <BottomTab.Screen name="Home" component={TopTabs}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen name="Search" component={UserSearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Search name="search1" color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen name="Notify" component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Notify name="notifications" color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen name="Message" component={MessageScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="android-messages" color={color} size={size} />
                    ),
                }}
            />


        </BottomTab.Navigator>
    );
}

export default BottomTabs 