/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './src/Route';
const App = () => {


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Route />

    </View>
  );
}


export default App;
