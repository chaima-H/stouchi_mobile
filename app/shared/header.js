import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}){
    const openMenu=()=>{
     navigation.openDrawer();
    }
    return(
    <View style={styles.header}><MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
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
 left: 5
}

});