
import {StyleSheet, View,Text} from 'react-native'

export function Card(){
  
    return(
        <View style={styles.container}>
        <Text>Your request is in pending</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  