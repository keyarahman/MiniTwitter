import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;