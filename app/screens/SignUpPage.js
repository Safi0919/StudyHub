import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { db } from '../../config';
import { ref, set, get } from 'firebase/database';
import colors from '../config/Colors';

function SignUpPage(props) {
    const navigateToHomePage = () => {
        props.navigation.navigate('HomePage');
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const containsSpecialCharacter = (email) => {
        const specialCharacterRegex = /[,]/;
        return specialCharacterRegex.test(email);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isAlrEmail = async (emailKey) => {
        const userRef = ref(db, 'users/' + emailKey);
        try {
            const snapshot = await get(userRef);
            return snapshot.exists();
        } catch (error) {
            console.error('Error fetching email from the database', error);
            return false;
        }
    };

    const dataAddOn = async () => {
        const emailKey = email.replace(/\./g, ',');

        if (containsSpecialCharacter(email)) {
            const errorMessage = 'Email cannot contain " , "';
            setErrorMessage(errorMessage);

            setTimeout(() => {
                setErrorMessage('');
            }, 3500);
            return;
        }

        if (!isValidEmail(email)) {
            const errorMessage = 'Invalid email format';
            setErrorMessage(errorMessage);

            setTimeout(() => {
                setErrorMessage('');
            }, 3500);
            return;
        }

        if (password !== verifyPassword) {
            const errorMessage = 'Password and verify password do not match';
            setErrorMessage(errorMessage);

            setTimeout(() => {
                setErrorMessage('');
            }, 3500);

            return;
        }

        const emailInUse = await isAlrEmail(emailKey);

        if (emailInUse) {
            const errorMessage = 'This email already exists';
            setErrorMessage(errorMessage);

            setTimeout(() => {
                setErrorMessage('');
            }, 3500);

            return;
        }

        const userRef = ref(db, 'users/' + emailKey);

        const userData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
        };

        set(userRef, userData)
            .then(() => {
                console.log('Data added successfully');
                setFirstName('');
                setLastName('');
                setPassword('');
                navigateToHomePage();
            })
            .catch((error) => {
                console.error('Error adding data: ', error);
            });
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
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
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Re-Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setVerifyPassword(text)}
            />
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={dataAddOn}>
                <Text style={styles.buttonText}>Submit</Text>
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
        borderRadius: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
        color: 'white',
    },
    button: {
        borderRadius: 50,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.blue,
        padding: 10,
        margin: 5,
        backgroundColor: colors.blue,
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
