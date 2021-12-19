import React from 'react';
import useEffect from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Register from '../Components/Input';
import BMstack from './BMstack';
// import Dashboard from './Dashboard'
import Nav from './Nav'
import { Card } from './Card';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
            <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
            <Stack.Screen name="BMLogin" component={BMLogin} options={{ headerShown: false }} />
            <Stack.Screen name="BMstack" component={BMstack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default MyStack