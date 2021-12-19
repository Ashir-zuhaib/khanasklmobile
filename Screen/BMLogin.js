import * as React from "react"
import { useState } from "react"
// import {auth, signInWithEmailAndPassword} from '../Components/Firebase'
import firebase from "../Config/Config"
import { useNavigation } from "@react-navigation/core"
import LogoText from '../assets/Logo.png'
import {Alert, StyleSheet, TouchableOpacity, Image} from 'react-native'
// import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"
export const BMLogin = () => {
  const [email, setEmail]=React.useState("")
  const [password, setPassword]=React.useState("")
  const navigation = useNavigation();
  let  userData ={
    email,
    password
  }
  console.log('userName: ', userData)
  // const navigationRef = useNavigationContainerRef();
  const handleSubmit = (event)=>{
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword( email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .then(()=>navigation.navigate('BMstack'))
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
  });
  }
  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        <TouchableOpacity>
                <Image source={LogoText.logoText} style={styles.imagestyle} />
            </TouchableOpacity>
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in as BranchManager
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input value={email} onChangeText={text=>setEmail(text)}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" value={password} onChangeText={text=>setPassword(text)} />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" onPress={handleSubmit} colorScheme="indigo">
          Sign in
        </Button>
        {/* <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm a new user.{" "}
          </Text> */}
          {/* <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            to ={() => navigationRef.navigate('Signup')}
          >
            Sign Up
          </Link> */}
          
        {/* </HStack> */}
      </VStack>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <BMLogin />
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