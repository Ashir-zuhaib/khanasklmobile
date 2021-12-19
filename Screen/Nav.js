import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
// import ImagePicker from '../Components/ImagePicker'
import { Feather } from '@expo/vector-icons';
import GoogleMap from './GoogleMap';
import Input from '../Components/Input';
const Tab = createBottomTabNavigator();
export default function Auth(){
    return(

    <Tab.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen name="Register" component={Input}
      options={{
        tabBarLabel: 'Register',
        tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
      }}
      
      
       />
      <Tab.Screen name="Map" component={GoogleMap} options={{
        tabBarLabel: 'Map',
        tabBarIcon: () => <Feather name="search" size={24} color="black" />,
      }} />
      {/* <Tab.Screen name="Add" component={CreatePost} /> */}
      {/* <Tab.Screen name="Create" component={ImagePicker} options={{
        tabBarLabel: 'Post',
        tabBarIcon: () => <Ionicons name="add-circle-sharp" size={24} color="black" />}} /> */}
      {/* <Tab.Screen name="Profile" component={Dashboard} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />}} /> */}
    </Tab.Navigator>

    )
}