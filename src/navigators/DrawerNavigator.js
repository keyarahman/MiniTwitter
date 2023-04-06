import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigator';
import { View } from 'react-native';
const DrawerStack = createDrawerNavigator()
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
const DrawerNavigator = () => {

    return (

        <DrawerStack.Navigator
            drawerContent={DrawerContent}
            screenOptions={{ headerShown: false }}>
            <DrawerStack.Screen name="Tabs" component={BottomTabs} options={{
                title: "Home",
            }} />
            <DrawerStack.Screen name="Profile" component={ProfileScreen} />
        </DrawerStack.Navigator>
    )
}



export default DrawerNavigator