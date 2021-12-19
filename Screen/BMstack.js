// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import QR from './QRode'
// // import ImagePicker from '../Components/ImagePicker'
// import { Feather } from '@expo/vector-icons';
// import GoogleMap from './GoogleMap';
// import Input from '../Components/Input';
// import { Serialverify } from './Serial';
// const Tab = createBottomTabNavigator();
// export default function BMtab(){
//     return(

//     <Tab.Navigator 
//     screenOptions={{
//       headerShown: false
//     }}
//     >
//       <Tab.Screen name="Verify via serial" component={Serialverify}
//       options={{
//         tabBarLabel: 'Verify via serial',
//         tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
//       }}
      
      
//        />
//       <Tab.Screen name="Verify via QR" component={QR} options={{
//         tabBarLabel: 'MaVerify via QR',
//         tabBarIcon: () => <Feather name="search" size={24} color="black" />,
//       }} />
//       {/* <Tab.Screen name="Add" component={CreatePost} /> */}
//       {/* <Tab.Screen name="Create" component={ImagePicker} options={{
//         tabBarLabel: 'Post',
//         tabBarIcon: () => <Ionicons name="add-circle-sharp" size={24} color="black" />}} /> */}
//       {/* <Tab.Screen name="Profile" component={Dashboard} options={{
//         tabBarLabel: 'Profile',
//         tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />}} /> */}
//     </Tab.Navigator>

//     )
// }