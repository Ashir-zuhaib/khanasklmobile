import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TopBar (props){
    return (
      <View style={styles.container}>
        <Text>Back</Text>
        <Text>Welcom {props.name}</Text>
        <Text>Log out</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;