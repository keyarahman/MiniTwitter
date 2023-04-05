import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigator';

const DrawerStack = createDrawerNavigator()

const DrawerNavigator = () => {

    return (

        <DrawerStack.Navigator screenOptions={{ headerShown: false }}>
            <DrawerStack.Screen name="Tabs" component={BottomTabs} options={{ title: "Home" }} />
            <DrawerStack.Screen name="Proifle" component={Profile} />
        </DrawerStack.Navigator>
    )
}

const Profile = () => {
    return <View></View>
}

export default DrawerNavigator