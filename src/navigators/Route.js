import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Animated, ActivityIndicator } from 'react-native';

import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();


// Main Route 
const Route = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    React.useEffect(() => {
        AsyncStorage.getItem("token").then(token => {
            if (token) {
                setIsLoggedIn(true)
            }
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    }

    return (
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Drawer' : "LogIn"}>
            <Stack.Screen
                name="LogIn"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false, }} />

        </Stack.Navigator>
    );
};


export default Route;