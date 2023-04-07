
import React from 'react';
import Route from './src/navigators/Route';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { store } from './src/redux/Store';
import { Provider, useDispatch } from 'react-redux'
import { AddToken } from './src/redux/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';
const App = () => {


  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1, }}>
        <NavigationContainer theme={DarkTheme}>
          <Route />
          <StatusBar barStyle="light-content" />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


export default App;
