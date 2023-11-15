//This is not an actual HomePage. This is just a file to test

import React from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';


function HomePage(props) { 
    return (
        <View style={styles.container}>
           {/* <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({                      //Need to work on styling and cosmetics to work on IOS (Currently testing on Web)
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 100, // Set the width as needed
        height: 100, // Set the height as needed
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
    },
});

export default HomePage;
