import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TextBase,
} from 'react-native';
import React from 'react';
import FollowCard from '../../components/FollowCard';
import { useSelector } from 'react-redux';

const Following = ({ navigation }) => {
    const followingList = useSelector(state => state.user.userFollowingList);
    console.log(followingList);
    return (
        <SafeAreaView style={{ flex: 1, top: 20, marginHorizontal: 10 }}>
            {followingList?.length > 0 ? (
                <FlatList
                    data={followingList}
                    renderItem={({ item }) => (
                        <FollowCard
                            id={item.id}
                            username={item.username}
                            email={item.email}
                            isFollowing={true}
                            btnColor={true}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            ) : (
                <View>
                    <Text style={styles.title}>Be in the know</Text>
                    <Text style={styles.subTitle}>
                        Following accounts is an easy way to create your timeline and know
                        whats happing with the topics and people you're interested in
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate('adduser')}>
                        <Text style={styles.btnText}>Find people to follow</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Following;
const styles = StyleSheet.create({
    title: { color: 'white', fontSize: 25, fontWeight: 'bold' },
    subTitle: { color: 'gray', fontSize: 17, fontWeight: '500' },
    buttonStyle: {
        backgroundColor: '#00acee',
        width: 180,
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    btnText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
});
