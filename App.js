import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './app/screens/LoginPage';
import SignUpPage from './app/screens/SignUpPage';
import HomePage from './app/screens/HomePage';
import ResetPasswordPage from './app/screens/ResetPasswordPage';
import ForgotPasswordPage from './app/screens/ForgotPasswordPage';




const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }}/>
                <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
                <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} options={{ headerShown: false }}/>
                <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
