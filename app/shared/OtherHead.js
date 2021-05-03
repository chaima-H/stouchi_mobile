import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}){
    const pressHandler=()=>{
        navigation.navigate('ModifScreen');
        }
    return(
    <View style={styles.header}><MaterialIcons name='settings' size={28} onPress={pressHandler}  style={styles.icon}/>
    <View>
   <Text style={styles.headerText}></Text>
   </View>
    </View>
    );
}
const styles=StyleSheet.create({
    header:{
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
       
    },
headerText:{
   fontWeight:'bold',
   fontSize:20,
   color:'#333',
   letterSpacing:1,
    right:90

},
icon:{
 position:'absolute',
 right: 5
}

});