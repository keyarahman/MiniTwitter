import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import TweetCard from '../../components/TweetCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

const FollowingSceen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>No data avaialble </Text>
        </View>
    );
};
export default FollowingSceen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
