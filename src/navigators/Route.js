import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Animated, ActivityIndicator } from 'react-native';

import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TweetScreen from '../components/TweetScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AddToken } from '../redux/AuthSlice';
const Stack = createNativeStackNavigator();


// Main Route 
const Route = () => {
    const { token, isLoading } = useSelector(state => state.user.userTokenInfo);

    console.log("token,isLoading", [token, isLoading])

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(AddToken({ token: token, isLoading: false }))
    }, [])

    if (isLoading) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    }

    return (
        <Stack.Navigator initialRouteName={token ? 'Drawer' : "LogIn"} >
            {!!token ? (
                <>
                    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false, }} />
                    <Stack.Screen name="Tweet" component={TweetScreen} options={{ headerShown: false, presentation: 'modal' }} />
                </>
            ) : (<>
                <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
            </>)}



        </Stack.Navigator>
    );
};


export default Route;