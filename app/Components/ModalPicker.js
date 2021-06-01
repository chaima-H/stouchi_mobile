import React ,{useEffect,useState}from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseUrl from '../services/api';
import axios from 'axios';
//const Categories=['Food & Drinks','Housing','Education','Fun','Incomes'];
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
const ModalPicker=(props)=>{
   const onPressItem=(option)=>{
     props.changeModalVisibility(false);
     props.setData(option);

   }
const [Categories,setCategories]=useState([]);
useEffect(()=>
    {console.log( "text"+AsyncStorage.getItem('token'));
       AsyncStorage.getItem('token').then(
           res=>{
               console.log(res);
               const config={
                   headers:{
                       Authorization:'Bearer '+ res,
                       
                   }
               };
      
           axios.get(baseUrl+'api/categories/namecatego',config).then(
               res=>{

                   console.log("liste catego"+ JSON.stringify(res.data));
                   setCategories(res.data);},
               err=>{console.log(err);}
           )
           },
           err=>{console.log(err);}
       )
   },[setCategories]);
 const option=Categories.map((item,index)=>{
     return(
         <TouchableOpacity style={styles.option}
         Key={index}
         onPress={()=>{onPressItem(item)}}>
             <Text style={styles.text}>{item}</Text>
         </TouchableOpacity>
     )
 })
    return(

        <TouchableOpacity onPress={()=>props.changeModalVisibility(false)}
        style={styles.container}>
         <View style={[styles.modal , {width : WIDTH-25, height: HEIGHT/1.5}]}>
             <ScrollView>{option}</ScrollView>
         </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     
    },
    modal:{
        backgroundColor:'#C9D4D9',
        borderRadius:10,
       

    },
    option:{
     alignItems:'center',
     borderBottomColor:'#DBE5E9',
     borderBottomWidth:1

    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        color:'#177685'
    }


})
export{ModalPicker}