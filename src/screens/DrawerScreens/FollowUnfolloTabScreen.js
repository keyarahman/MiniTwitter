import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FollowerScreen from './FollowerScreen';
import Following from './Following';

const TopTab = createMaterialTopTabNavigator();
const FollowUnfolloTabScreen = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({

            headerLeft: Platform.OS === "ios" ? () => (

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="arrow-left" size={25} color={'white'} />
                </TouchableOpacity>
            ) : null,
            headerTitle: () => (
                <Text
                    numberOfLines={1}
                    style={{ color: 'white', fontSize: 20, maxWidth: 100 }}>
                    Profile
                </Text>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('adduser')}
                    style={{ marginLeft: 15, width: 30 }}>
                    <Icon name="person-add" size={25} color={'white'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: '700',
                    textTransform: 'none',
                },
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 0.2,
                    borderColor: 'gray',
                },
            }}>
            <TopTab.Screen name="Followers" component={FollowerScreen} />
            <TopTab.Screen name="Following" component={Following} />
        </TopTab.Navigator>
    );
};

export default FollowUnfolloTabScreen;
