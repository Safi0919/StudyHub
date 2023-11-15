//This is not an actual HomePage. This is just a file to test

import React from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/Colors';

function HomePage(props) { 
    
    // const navigateToCreateStudyGroup = () => {
    //     props.navigation.navigate('CreateStudyGroup'); 
    // }

    // const navigateToJoinStudyGroup = () => {
    //     props.navigation.navigate('JoinStudyGroup'); 
    // }
    
    return (
        
        <View style={styles.container}>
            
                <Text style={styles.buttonText}>
                    Create a Study Group
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({                      //Need to work on styling and cosmetics to work on IOS (Currently testing on Web)
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

export default HomePage;
