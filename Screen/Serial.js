
import { Input } from 'native-base';
import {StyleSheet, View,Text} from 'react-native'

export function Serialverify(){
    return(
        <View style={styles.container}>
        <Text>Verify Serial No</Text>
        <Input />
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
  