import React,{useEffect,useState} from 'react';
import {Text,View,Image,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import axios from 'axios';
import baseUrl from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SideBar =( props) =>{
    const[name,setName]=useState([]);
    //const[firstName,setFirstName]=useState('');
    useEffect(()=>
    {console.log( "text"+AsyncStorage.getItem('token'));
       AsyncStorage.getItem('token').then(
           res=>{
               console.log(res);
               const config={
                   headers:{
                       Authorization:'Bearer '+ res
                   }
               };
               axios.get(baseUrl+'api/account',config).then(
               res=>{

                   console.log(res.data);
               setName([res.data.firstName," ",res.data.login]);},
               err=>{console.log(err);}
           )
           },
           err=>{console.log(err);}
       )
   },[setName]);
    return(  
    <ScrollView>
       <View style={styles.viewTop}>
     <Image style={styles.photo} source={require('../assets/logo.png')} resizeMode='contain'/>
     <Text style={styles.name}>{name}</Text>
     </View>
     <View style={styles.conatiner}>
         <DrawerNavigatorItems {...props}/>
     </View>
    </ScrollView>
);
}
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
export default SideBar;