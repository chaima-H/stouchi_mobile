import React,{Component,useState,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput, 
  Button, Modal,Keyboard,TouchableWithoutFeedback,
  KeyboardAvoidingView,Platform,Alert} from 'react-native';
import RadioButton from '../Components/RadioButton';
import {  MaterialIcons} from '@expo/vector-icons';
import TestDate from '../Components/TestDate';
import axios from 'axios';
import baseUrl from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Create from '../Components/Create';
import { date } from 'yup/lib/locale';


const PROP = [
	{
		key: 'Depense',
		text: 'Expenses',
	},
	{
		key: 'Revenus',
		text: 'Incomes',
	},
	

];

 function Addition ({navigation}){

  const OnSelect=(data)=>{
    setSelect(data);
  }
   const pressHandler1=()=>{
     navigation.navigate('CategorieStack',{OnSelect:OnSelect, test:'addition'});
   }
   const [amount,setAmount]=useState('0.0');
   const [comment,setComment]=useState('');
   const[modalOpen,setModalOpen]=useState(false);
   const[radio,setRadio]=useState('');
   const [dateChild,setDateChild]=useState('');
   const[select,setSelect]=useState({color:"#87CEE0",name:'',nameSub:''});

   var axios = require('axios');
   
   
  
  const handleLogout = () => 
    
   {console.log( "text"+AsyncStorage.getItem('token'));
      AsyncStorage.getItem('token').then(
          res=>{

              console.log(res);
              const data = JSON.stringify({
                "type": radio,
                "montant": amount,
                "note": comment,
                "nameCatego": (select.nameSub==""?select.name:select.nameSub),
                 "modifDate":dateChild,
              });
              console.log("showww"+data);
              const testUrl=baseUrl+'api/categories/'+(select.nameSub==""?select.name:select.nameSub);
              const config={
                method: 'put',
                url:testUrl,
                  headers:{
                      Authorization:'Bearer '+ res,
                      'Content-Type': 'application/json',

                  },
                  data:data
              };
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                Alert.alert("","added success");
               
              })
              .catch(function (error) {
                console.log(error);
                Alert.alert("","added fail");
               
              })
          },
          err=>{console.log(err);}
      )}
 
    return (
      <KeyboardAvoidingView  style={{flex:1}} behavior={Platform.os=== "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        <RadioButton PROP={PROP} propfromparent={(radio)=>{setRadio(radio)}} />      
        
        <TextInput
          style={styles.input}
         placeholder="amount"  
         placeholderTextColor="#177685"
         keyboardType="numeric"
         value={amount}
         onChangeText={(amount)=>{setAmount(amount)}}></TextInput>      
         <Text style={styles.label}>Categories</Text>
         <View  style={styles.textContainer}>
        <View style={{  width:60,
    height:60, 
    backgroundColor:select.color,
    borderRadius:40,
     position:'relative',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,}} ><MaterialIcons name="category" size={35} color="white" onPress={pressHandler1}/></View>
      
      <Modal visible={modalOpen} animationType='slide' >
        <View style={styles.container}>
        <MaterialIcons name="close" size={35} color="blue" style={styles.modaltogle} onPress={()=>{setModalOpen(false)}}></MaterialIcons>
          <Create></Create>
  
          </View>
          </Modal>
         
 
 
 <View style={styles.icon} ><MaterialIcons name="add-circle" size={35} color="white" onPress={()=>{setModalOpen(true)}}/></View>
</View>

<Text style={{fontWeight:'bold',fontSize:16}}> choose       create</Text>   
   
<View style={styles.double}><Text style={styles.label} >Date</Text><TestDate setDate={(dateChild)=>{setDateChild(dateChild)}}></TestDate></View>
           
          <TextInput
          style={styles.input}
         placeholder="add comment"  
         placeholderTextColor="#177685"
         value={comment}
         onChangeText={(comment)=>{setComment(comment)}}></TextInput>
          <View style={styles.button}><Button title='Add' color="#EBE119" 
          onPress={handleLogout}
       
          ></Button>   
          </View>
     
      </View>
      
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    alignItems:'center',
    
  },
  modal:{

  },
  input : {
    width:280,
    height: 40,
    borderBottomColor: "#87CEEB",
    borderBottomWidth:2,
    fontSize: 20,
    marginTop:20,
    marginBottom:10
    
   },
   textContainer:{
      flexDirection:'row',
      
      
   },
 
   button:{
     position:'absolute',
     bottom:0,
    alignSelf:'center',
    marginTop:15,
    height:100,
    width:150,
    
  },
  label: {
    fontSize:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold',
    color:'#177685',
    paddingRight:12
    
  },
  double:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between',  
    
    
    
  },
  icon:{
    width:60,
    height:60, 
    backgroundColor:"#87CEE0",
    borderRadius:40,
     position:'relative',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
   
  },
  modaltogle:{
    borderWidth:1,
    borderColor:"#f2f2f2",
    borderRadius:10,
  
    padding:5,
    alignSelf:'flex-end',
    marginRight:10
  },
  
});
export default Addition;
/*()=>console.log(
          radio,
           amount,
           comment,
           dateChild,
           select.name,
           select.nameSub)
          }*/