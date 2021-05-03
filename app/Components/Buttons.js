import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
export default function FlatButton ({text, onPress}){
return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
    </TouchableOpacity>

)
}
const styles=StyleSheet.create(
    {
     button:{
       borderRadius:20,
       paddingHorizontal:50,
       paddingVertical:12,
       backgroundColor:"white",
         },
      buttonText:{
          color:"#87CEEB",
          fontWeight: 'bold',
          fontSize : 25,
          textAlign:'center',
      }
    })

    