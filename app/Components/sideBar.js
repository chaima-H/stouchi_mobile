import React from 'react';
import {Text,View,Image,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

export default SideBar = props =>(
    <ScrollView>
       <View style={styles.viewTop}>
     <Image style={styles.photo} source={require('../assets/logo.png')} resizeMode='contain'/>
     <Text style={styles.name}>Chaima Hafsi</Text>
     </View>
     <View style={styles.conatiner}>
         <DrawerNavigatorItems {...props}/>
     </View>
    </ScrollView>
);
const Styles=StyleSheet.create({

});
const styles=StyleSheet.create({
conatiner:{
    flex: 1,
    
},
   photo:{
    flexDirection: 'column', height: 80, width: 80 ,
    borderRadius:40,
    borderColor:"#FFF",
    
   } ,
viewTop:{
    padding:16,
    paddingTop: 30,
    backgroundColor:"#87CEEB",
    flexDirection:'row'
},
name:{
    color:"#FFF",
    fontSize:20,
    fontWeight:"800",
    alignItems:'center',
    textAlignVertical:'center',
    paddingLeft:10
 
}
});