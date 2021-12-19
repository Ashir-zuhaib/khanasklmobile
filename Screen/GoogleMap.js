
import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native'
import { branches } from "../Components/food_bank";
import MapView, { Marker } from "react-native-maps";
import { Foundation } from '@expo/vector-icons';
import home from '../assets/home.png'
import * as Location from 'expo-location';
function GoogleMap(){
  
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

  return (
    <>
     
      <MapView
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
        initialRegion={{
          latitude: 24.817021943569035,
          longitude: 67.18838227130333,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          draggable
          title={'Home'}
          coordinate={{ latitude: start.latitude, longitude: start.longitude }} 
        ><Image style={{ width: 10, height: 10 }} source={home}/></Marker>
        {branches.map((data, index) => {
          console.log("checking data", data);
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }
            }
            title={data.branch_name}
              key={index + 1}
              pinColor={
                shortestDistance !== null &&
                shortestDistance.nearestbranch.latitude == data.latitude
                  ? "yellow"
                  : "red"
              }

              // image={{ uri: "custom_pin" }}
            />
          );
        })}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GoogleMap