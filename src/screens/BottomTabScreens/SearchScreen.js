import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import FollowCard from '../../components/FollowCard';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { token } = useSelector(state => state.user.userTokenInfo);

  const handleSearch = async (text) => {
    setSearch(text);

    try {
      const { data } = await axios.post('https://missingdata.pythonanywhere.com/search', {
        token: text
      },
        {
          headers: {
            'X-Jwt-Token': `Bearer ${token}`
          }
        });
      console.log("data", data)
      if (data && data.count > 0) {
        setFilteredData(data?.search_results)
      }
    } catch (e) {

    }

  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
        <Image source={{ uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" }} style={{ height: 50, width: 50, borderRadius: 25, margin: 5 }} />
        <SearchBar
          placeholder='Search Twitter'
          onChangeText={handleSearch}
          value={search}
          inputContainerStyle={styles.searchInputContainer}
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          placeholderTextColor='#6E767D'
        />
        <View></View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <FollowCard id={item.id} username={item.username} email={item.email} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchContainer: {
    backgroundColor: '#1D2025',
    borderRadius: 30,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    width: "70%", alignSelf: "center",
  },
  searchInputContainer: {
    backgroundColor: '#1D2025',
    height: 30,

  },
  searchInput: {
    color: '#D9D9D9',
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#38444D',
    paddingVertical: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  },
  itemName: {
    color: '#D9D9D9',
    fontSize: 17,
    fontWeight: "bold"
  }
})



export default SearchScreen;
