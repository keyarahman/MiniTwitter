import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigator';
import { View } from 'react-native';
const DrawerStack = createDrawerNavigator()
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../screens/DrawerScreens/ProfileScreen';
import FollowUnfolloScreen from '../screens/DrawerScreens/FollowUnfolloScreen';
import AddUserScreen from '../screens/DrawerScreens/AddUserScreen';
const DrawerNavigator = () => {

    return (

        <DrawerStack.Navigator
            drawerContent={DrawerContent}>
            <DrawerStack.Screen name="Tabs" component={BottomTabs} options={{
                title: "Home",
                headerShown: false

            }} />
            <DrawerStack.Screen name="Profile" component={ProfileScreen} />
            <DrawerStack.Screen name="followUnfollow" component={FollowUnfolloScreen} />
            <DrawerStack.Screen name="adduser" component={AddUserScreen} />


        </DrawerStack.Navigator>
    )
}



export default DrawerNavigator