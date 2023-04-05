import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigator';
import { View } from 'react-native';
const DrawerStack = createDrawerNavigator()
import DrawerContent from '../components/DrawerContent';

const DrawerNavigator = () => {

    return (

        <DrawerStack.Navigator
            drawerContent={DrawerContent}
            screenOptions={{ headerShown: false }}>
            <DrawerStack.Screen name="Tabs" component={BottomTabs} options={{
                title: "Home",
            }} />
            <DrawerStack.Screen name="Proifle" component={Profile} />
        </DrawerStack.Navigator>
    )
}

const Profile = () => {
    return <View></View>
}

export default DrawerNavigator