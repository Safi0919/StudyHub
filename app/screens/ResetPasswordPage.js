//This is not an actual ForgotPasswordPage. This is just a file to test
import React from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity,Text } from 'react-native';

import colors from '../config/Colors';

function ResetPasswordPage(props) { 
    const navigateToHomePage = () => {
        props.navigation.navigate('HomePage'); 
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Logo.png')}      
                style={styles.logo}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Verify password"
                secureTextEntry={true}                  
            />                                                                          
            <TouchableOpacity style={styles.button} onPress={navigateToHomePage}>      
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>                             //Go to reset password page upon verifying code (above)
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
});

export default ResetPasswordPage;
