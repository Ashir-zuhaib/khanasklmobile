import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './Screen/HomeScreen';
import MyStack from './Screen/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}

