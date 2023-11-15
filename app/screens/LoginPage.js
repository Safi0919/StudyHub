import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native';

import colors from '../config/Colors';
import {useEffect} from 'react';
//import * as SQLite from 'expo-sqlite';

function LoginPage(props) { 

    
    

    //const for defining email and password
    const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

    //change the variable of password and email with the user input
    const handleInputChange = (key, value) => {
        setUserInput({ ...userInput, [key]: value });
    };

    //check if the user has entered valid email and password
    const handleSubmit = () => {
        if (userInput.email.length === 0) {
        Alert.alert('Warning!', 'Please enter an email address');
        } 
        else if (userInput.password.length === 0) {
        Alert.alert('Warning!', 'Please enter a password');
        }
        else {
        console.log('Email entered:', userInput.email);             
        console.log('Password entered:', userInput.password);
        navigateToHomePage();
        }
    };
    
    const navigateToSignup = () => {
        props.navigation.navigate('SignUp'); 
    }

    const navigateToForgotPasswordPage = () => {
        props.navigation.navigate('ForgotPasswordPage'); 
    }

    const navigateToHomePage = () => {
        props.navigation.navigate('HomePage'); 
    }

    const githubUrl = 'https://github.com/AnchalMandavia/StudyGroup';

    const handleGitHubLinkPress = () => {
        Linking.openURL(githubUrl)
            .catch((err) => console.error('An error occurred: ', err));
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Username/Email"
                placeholderTextColor="gray"
                autoCapitalize = 'none'
                onChangeText={(text) => handleInputChange('email', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="gray"
                onChangeText={(text) => handleInputChange('password', text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.buttonNoFill} onPress={navigateToSignup}>
                <Text style={styles.buttonTextBlue}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonBlack} onPress={navigateToForgotPasswordPage}>
                <Text style={styles.buttonText}>
                    Forgot Password
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGitHubLinkPress}>
                <Text style={styles.githubLinkText}>GitHub</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        backgroundColor: 'black',
    },
    logo: {
        position: 'absolute',
        top: 75,
        width: 250,
        height: 250,
        marginBottom: 20,
        borderRadius: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
        color: 'white'
        
    },
    githubLinkText: {
        color: colors.blue,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
    },
    button: {
        borderRadius: 50,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.blue,
        padding: 10,
        margin: 5, // Add margin for spacing between buttons
        backgroundColor: colors.blue, // Change the background color
    },
    buttonBlack: {
        borderRadius: 50,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.black,
        padding: 10,
        margin: 5, // Add margin for spacing between buttons
        backgroundColor: colors.black, // Change the background color
    },
    buttonNoFill: {
        borderRadius: 50,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.blue,
        padding: 10,
        margin: 5, // Add margin for spacing between buttons
        //backgroundColor: colors.blue, // Change the background color
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
    },
    buttonTextBlue: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default LoginPage;
