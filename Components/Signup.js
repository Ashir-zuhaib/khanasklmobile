import * as React from "react"
import {Alert, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/core"
// import SuccessAlert from '../Components/Alert'
import firebase from "../Config/Config"

import {
  Text,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  CloseIcon,
} from "native-base"
import LogoText from '../assets/Logo.png'

export const Signup = () => {
  const [userName, setUserName]=React.useState("")
  const [email, setEmail]=React.useState("")
  const [password, setPassword]=React.useState("")
  let  userData ={
    userName,
    email,
    password
  }
  console.log('userName: ', userData)
  const handleSubmit =(event)=>{
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user.uid;
            console.log('User :', user)
            firebase.firestore().collection("Users").doc(userCredential.user.uid).set({
            userName:userName,
            email: email,
            uid:user,
            password: password
        })
    })
// Add a new document in collection "cities"
.then(console.log('data add'))
// .catch((error) => {
//   console.error("Error writing document: ", error);})
.then(setTimeout(()=>{navigation.navigate('Login')},2000))
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    Alert.alert('error', errorMessage)
    // ..
  });
    
  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   // setcircularprogress(true)
  //     const user = userCredential.user;
  //     console.log('firebase: ', user)
  //   })
  //   .then(async() => {
  //     try {
  //       const docRef = await addDoc(collection(db, "users"), {
  //         userName,
  //         email,
  //          password,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     }catch (e) {
  //         console.error("Error adding document: ", e);
  //       }
  //     })
  //       .then(()=>navigation.navigate('Login'))
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   }); 
  }
    
  const navigation = useNavigation();
  
  
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
        fontWeight="semibold"
      >
        <TouchableOpacity>
                <Image source={LogoText.logoText} style={styles.imagestyle} />
            </TouchableOpacity>
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>
          <Input value={userName} onChangeText={text=>setUserName(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input value={email} onChangeText={text=>setEmail(text)}  />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" value={password} name='password' onChangeText={(password)=>setPassword(password)}  />
        </FormControl>
        
        <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>

          Sign up

        </Button>
        
      </VStack>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Signup />
      </Center>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  imagestyle:{
    width:120,
    height:40,
},

})