import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import TweetCard from '../../components/TweetCard';

const NewsUpdateScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>No data avaialble </Text>
        </View>
    );
};

export default NewsUpdateScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center"
    },
});
