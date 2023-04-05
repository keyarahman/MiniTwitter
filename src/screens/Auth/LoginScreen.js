import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { AddToken } from '../../redux/AuthSlice';
const LoginScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setError("")
    setIsLoading(true)
    if (!username || !password) {
      setError("Please fill up  all the provided fields")
    } else {
      console.log(username, password)
      try {
        const { data } = await axios.post('https://missingdata.pythonanywhere.com/login', {
          email: username,
          password: password,
        }
        )
        console.log("data", data.token)
        if (data?.token) {
          Alert.alert("Successfully Login")
          dispatch(AddToken({ token: data?.token, isLoading: false }))

        }
      }
      catch (e) {
        setError("Username or Password is incorrect!")
        console.log(e)
      }
    }
    setIsLoading(false)
  }



  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png" }} style={styles.logo} />
      <Text style={styles.title}>Log in to Twitter</Text>
      <Text style={styles.errorStyle}>{error}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone, email, or username"
          placeholderTextColor="#AAB8C2"
          value={username}
          onChangeText={text => {
            setError("")
            setUsername(text)
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AAB8C2"
          value={password}
          onChangeText={text => {
            setError("")
            setPassword(text)
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Sign up for Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 68,
    height: 60,

    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#38444D',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#1DA1F2',
    fontSize: 16,
  },
  errorStyle: { color: "red", marginRight: 50, marginBottom: 10 }

});

export default LoginScreen;
