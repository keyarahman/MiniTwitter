import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigator';
import { View } from 'react-native';
const DrawerStack = createDrawerNavigator()
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../screens/DrawerScreens/ProfileScreen';
import FollowUnfolloTabScreen from '../screens/DrawerScreens/FollowUnfolloTabScreen';
import AddUserScreen from '../screens/DrawerScreens/AddUserScreen';
import FollowUnfolloScreen from '../screens/DrawerScreens/FollowUnfolloTabScreen';

const DrawerNavigator = () => {

    return (

        <DrawerStack.Navigator
            drawerContent={DrawerContent}>
            <DrawerStack.Screen name="Tabs" component={BottomTabs} options={{
                title: "Home",
                headerShown: false

            }} />
            <DrawerStack.Screen name="Profile" component={ProfileScreen} />




        </DrawerStack.Navigator>
    )
}



export default DrawerNavigator