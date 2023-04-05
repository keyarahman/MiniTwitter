
import React from 'react';
import Route from './src/navigators/Route';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from "@react-navigation/native"

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer theme={DarkTheme}>
        <Route />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
