import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { AddToken } from '../redux/AuthSlice';

const DrawerContent = ({ navigation }) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(AddToken({ token: null, isLoading: false }))
        navigation.closeDrawer();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>Jack Dorsey</Text>
                    <Text style={styles.username}>@jack</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <MenuItem label="Home" icon="home" />
                <MenuItem label="Profile" icon="account-circle" />
                <MenuItem label="Explore" icon="search" />
                <MenuItem label="Notifications" icon="notifications-none" />
                <MenuItem label="Messages" icon="mail-outline" />
                <MenuItem label="More" icon="more-horiz" />
            </View>
            <View style={styles.footer}>
                <Text style={styles.smallText}>Terms of Service</Text>
                <Text style={styles.smallText}>Privacy Policy</Text>
                <Text style={styles.smallText}>Cookie Policy</Text>
                <Text style={styles.smallText}>Ads info</Text>
                <Text style={styles.smallText}>More ···</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const MenuItem = ({ label, icon }) => {
    return (
        <View style={styles.menuItem}>
            <Icon name={icon} size={24} color="#fff" />
            <Text style={styles.menuItemText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30

    },
    avatarContainer: {
        borderRadius: 50,
        backgroundColor: "Red"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userInfo: {
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    username: {
        fontSize: 16,
        color: '#657786',
    },
    menu: {
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        color: '#000',
    },
    menuItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        color: "white"
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#e6ecf0',
        paddingTop: 60,

    },
    smallText: {
        fontSize: 14,
        color: '#657786',
        marginBottom: 4,
    },
    logoutText: {
        color: "red",
        fontSize: 17,
        fontWeight: "bold",

    }
});

export default DrawerContent;