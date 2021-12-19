import * as React from "react"
import firebase from "../Config/Config"
import {Alert, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useState, useEffect,  createContext  } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/core"
import { ImageBrowser } from 'expo-image-picker-multiple';
import { branches } from "./food_bank"
// import SuccessAlert from '../Components/Alert'
// import firebase from "../Config"

// import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import {
  Text,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Select,
  CheckIcon,
  NativeBaseProvider,
  Stack,

  HStack,
  CloseIcon,
} from "native-base"
import LogoText from '../assets/Logo.png'
import TopBar from "./Topbar"
import Login from "./Login"
import { ScrollView } from "react-native-gesture-handler"
// import DropdownCategory from "./DropdownCategory"
// import {auth, createUserWithEmailAndPassword, collection, addDoc, db} from '../Components/Firebase'
export const UserData = () => {
  const [login, setLogin] = useState('')
  const [PName, setPName]=React.useState("")
  const [Fname, setFname]=React.useState("")
  const [DoB, setDoB]=React.useState("")
  const [Family, setFamily]=React.useState("")
  const [CNICno, setCNICno]=React.useState("")
  let [category, setCategory] = React.useState("")
  const [Income, setIncome]=React.useState("")
 
  let  userData ={
    PName,
    Fname,
    DoB,
    Family,
    CNICno,
    category,
    Income
  }
  console.log('userName: ', userData)
  useEffect(()=>{

    
    firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
            console.log(user.uid)
        firebase.firestore().collection('Users').doc(user.uid).get()
            .then((snapshot)=>{
                setLogin(snapshot.data())
                console.log('snapshot data username', snapshot.data().userName)
            })
            .catch((error)=>{
                console.error('error', error);
            })
            }
        })
    }, [])
  const handleSubmit =(event)=>{
    event.preventDefault()
    console.log('buttonPressed: ', userData)
    firebase.firestore().collection('Request').add({
      Name:userData.PName,
      FatherName: userData.Fname,
      DoB: userData.DoB,
      CNICno: userData.CNICno,
      FamilyMembers:userData.Family,
      Category:userData.category,
      Income:userData.Income,
      Nearestbranch:shortestDistance,
    })
      .then(()=>{
        console.log(Login.uid)
        navigation.navigate('Card')
      })
      .catch(error=>{
        console.error('error', error)
    })

    console.log('Submit')
     
  }
  const haversine = require('haversine')
    const [shortestDistance, setshortestDistance] = useState(null);
  const start = {
    latitude: 24.817021943569035,  
    longitude: 67.18838227130333,
  };

  // const end = {
  //   latitude: 24.8607,
  //   longitude: 67.0011,
  // };

  let distanceKM = [];

  branches.map((data, index) => {
    distanceKM.push(haversine(start, data));
  });

  useEffect(() => {
    if (distanceKM[0] < distanceKM[1] && distanceKM[0] < distanceKM[2]) {
      console.log("shortest distance is", distanceKM[0]);
      setshortestDistance({ distance: distanceKM[0], nearestbranch: branches[0] });
    } else if (distanceKM[1] < distanceKM[0] && distanceKM[1] < distanceKM[2]) {
      console.log("shortest distance is", distanceKM[1]);
      setshortestDistance({ distance: distanceKM[1], nearestbranch: branches[1] });
    } else if (distanceKM[2] < distanceKM[1] && distanceKM[2] < distanceKM[0]) {
      console.log("shortest distance is", distanceKM[2]);
      setshortestDistance({ distance: distanceKM[2], nearestbranch: branches[2] });
    } else {
      console.log("error aa rha ha...");
    }
    // console.log("distance in km", distanceKM);
  }, []);
  console.log("checking new data", shortestDistance);
    
  const navigation = useNavigation();
  
  
  return (
    <ScrollView>
      <TopBar name={login.userName} style={{marginTop:0}} />
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
                <Image source={LogoText} style={styles.imagestyle} />
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
        Enter your Correct Details
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>
          <Input value={PName} onChangeText={text=>setPName(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Father Name</FormControl.Label>
          <Input value={Fname} onChangeText={text=>setFname(text)}  />
        </FormControl>
        <FormControl>
          <FormControl.Label>Date of Birth</FormControl.Label>
          <Input type="date" value={DoB}  onChangeText={(date=>setDoB(date))}  />
        </FormControl>
        <FormControl>
          <FormControl.Label>CNIC NUMBER (whithout '-')</FormControl.Label>
          <Input type="number" value={CNICno}  onChangeText={(no=>setCNICno(no))}  />
        </FormControl>
        <FormControl>
          <FormControl.Label>Family Members</FormControl.Label>
          <Input type="number" value={Family}  onChangeText={(family)=>setFamily(family)}  />
        </FormControl>
        <FormControl>
          <FormControl.Label>Help Category</FormControl.Label>
          <Select
        selectedValue={category}
        minWidth="200"
        accessibilityLabel="Choose category"
        placeholder="Choose Category"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Select.Item label="Monthly Ration" value="MR" />
        <Select.Item label="Daily 1 Time Food" value="DT1" />
        <Select.Item label="Daily 2 Times Food" value="DT2" />
        <Select.Item label="Daily 3 Times Food" value="DT3" />
        
      </Select>
        </FormControl>
        <FormControl>
          <FormControl.Label>Enter monthly incom</FormControl.Label>
          <Input type="number" value={Income}  onChangeText={(incom)=>setIncome(incom)}  />
        </FormControl>
        
        <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>

          Submit

        </Button>
        
      </VStack>
    </Box>
    </ScrollView>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <UserData />
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