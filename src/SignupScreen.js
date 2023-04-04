import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const SignupScreen = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSignup = async () => {
        setIsLoading(true)

        if (!name || !email || !password) {
            setError("Please fill up all the provided fields")
        } else {

            try {
                const { data } = await axios.post('https://missingdata.pythonanywhere.com/signup', {
                    username: name,
                    email: email,
                    password: password,
                }
                )

                // console.log("res", data,)

                if (data?.message === "successful") {
                    Alert.alert("Congratulations, Your account has been successfully created.")
                    navigation.navigate("LogIn")
                }
            }
            catch (e) {
                setError("Already Exists!")
                console.log(e)
            }

        }
        setIsLoading(false)
    };



    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png" }} style={styles.logo} />
            <Text style={styles.title}>Create your account</Text>

            <Text style={{ color: "red", marginRight: 60, marginBottom: 10 }}>{error}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    placeholderTextColor="#AAB8C2"
                    value={name}
                    onChangeText={text => {
                        setError("")
                        setName(text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#AAB8C2"
                    value={email}
                    onChangeText={text => {
                        setError("")
                        setEmail(text)
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
                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    {isLoading ?
                        <ActivityIndicator color={"white"} /> :
                        <Text style={styles.signupButtonText}>Sign up</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                    <Text style={{ textAlign: "center", color: "#d9d9d9" }}>Have an account already? <Text style={styles.link}>Log In</Text></Text>
                </TouchableOpacity>
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
    signupButton: {
        backgroundColor: '#1DA1F2',
        borderRadius: 50,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    signupButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkContainer: {
        marginVertical: 20,
    },
    link: {
        color: '#AAB8C2',
        fontSize: 16,
        textAlign: 'center',
    },
    boldLink: {
        color: "#ffff",
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    link: {
        color: '#1DA1F2',
        fontSize: 16,
    },
});

export default SignupScreen;
