
import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Animated, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TimeLine from '../screens/TopTabScreens/TimeLine';
import FollowingSceen from '../screens/TopTabScreens/FollowingSceen';
import FollowerScreen from '../screens/TopTabScreens/FollowerScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabs = ({ navigation }) => {

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons name="menu" color={'blue'} size={32} />
            </TouchableOpacity>,
            headerTitle: () => <MaterialCommunityIcons name="home" color={'blue'} size={32} />,
        })
    }, [navigation])

    return (
        <TopTab.Navigator
            initialRouteName="For you"
        >
            <TopTab.Screen name="For you" component={TimeLine} />
            <TopTab.Screen name="Following" component={FollowingSceen} />
            <TopTab.Screen name="News Update" component={FollowerScreen} />

        </TopTab.Navigator>
    );
}

export default TopTabs