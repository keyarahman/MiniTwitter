import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeLine from '../screens/TopTabScreens/TimeLine';
import FollowingSceen from '../screens/TopTabScreens/FollowingSceen';
import FollowerScreen from '../screens/TopTabScreens/FollowerScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabs = ({ navigation }) => {

    React.useEffect(() => {

        navigation.setOptions({

            headerBackground: () => <View style={{ flex: 1, backgroundColor: 'black' }} />,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={{ uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" }} style={{ height: 40, width: 40, borderRadius: 20, left: 10 }} />
                </TouchableOpacity>,

            headerTitle: () =>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png" }} style={{ height: 25, width: 30 }} />
        })
    }, [navigation])

    return (
        <View style={{ flex: 1, position: 'relative', }}>

            <TopTab.Navigator
                initialRouteName="For you"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "700", textTransform: "none" },
                    tabBarStyle: { backgroundColor: 'black', borderBottomWidth: .2, borderColor: "gray" },
                }}
            >
                <TopTab.Screen name="For you" component={TimeLine} />
                <TopTab.Screen name="Following" component={FollowingSceen} />
                <TopTab.Screen name="News Update" component={FollowerScreen} />
            </TopTab.Navigator>

            <TouchableOpacity
                onPress={() => navigation.navigate("Tweet")}
                style={{ alignSelf: "flex-end", width: 50, height: 50, alignItems: 'center', justifyContent: "center", backgroundColor: "#00acee", borderRadius: 25, postioin: 'absolute', bottom: 16, right: 16 }}>
                <MaterialCommunityIcons name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>

    );
}

export default TopTabs



// const TweetScreen = () => {
//     const [tweet, setTweet] = useState('');

//     const handleTweet = () => {
//         // Code to post the tweet to Twitter API
//         console.log('Posting tweet: ', tweet);
//         setTweet('');
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <Text style={styles.cancelButton}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={handleTweet}>
//                     <Text style={styles.tweetButton} disabled={!tweet}>Tweet</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.content}>
//                 <Image source={{ uri: 'https://via.placeholder.com/50x50.png?text=DP' }} style={styles.dp} />
//                 <TextInput
//                     style={styles.textInput}
//                     multiline
//                     maxLength={280}
//                     placeholder="What's happening?"
//                     value={tweet}
//                     onChangeText={(text) => setTweet(text)}
//                 />
//             </View>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        color: '#1DA1F2',
        fontWeight: 'bold',
        fontSize: 16,
    },
    tweetButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: '#1DA1F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 30,
        overflow: 'hidden',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 30,
    },
    dp: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 24,
    },
});