import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { db } from '../../config';
import { ref, set} from 'firebase/database';

import colors from '../config/Colors';

function SignUpPage(props) { 
    const navigateToHomePage = () => {
        props.navigation.navigate('HomePage'); 
    }

    // Defining variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //function to add data to firebase
    const dataAddOn = () => {

        if (password !== verifyPassword) {
            const errorMessage = 'Password and verify password do not match';
            setErrorMessage(errorMessage);

            // Clear the error message after 5 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 3500);

            return;
        }

        const userRef = ref(db, 'users/' + email); // Define the reference to the user data

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };

        set(userRef, userData)
            .then(() => {
                console.log('Data added successfully');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                navigateToHomePage();
            })
            .catch((error) => {
                console.error('Error adding data: ', error);
            });
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Logo.png')}      //Need to update this with Logo.png
                style={styles.logo}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="First Name"
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Last Name"
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Password"
                secureTextEntry={true}                  //Need to add a button to make password visible on pressing
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Re-Enter Password"
                secureTextEntry={true}                  //Need to add a button to make password visible on pressing
                onChangeText={(text) => setVerifyPassword(text)}
            />
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={dataAddOn}>
                <Text style={styles.buttonText}>
                    Submit
                </Text>
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
    button: {
        borderRadius: 50,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.blue,
        padding: 10,
        margin: 5, // Add margin for spacing between buttons
        backgroundColor: colors.blue, // Change the background color
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
    },
     errorText: {
        color: 'white',
        marginTop: 5,
    },
});

export default SignUpPage;
