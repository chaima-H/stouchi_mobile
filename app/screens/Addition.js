import React,{Component,useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button, Modal} from 'react-native';
import RadioButton from '../Components/RadioButton';
import {  MaterialIcons} from '@expo/vector-icons';
import TestDate from '../Components/TestDate';

import Create from '../Components/Create';

const PROP = [
	{
		key: 'Expenses',
		text: 'Expenses',
	},
	{
		key: 'Incomes',
		text: 'Incomes',
	},
	

];

 function Addition ({navigation}){
   const pressHandler1=()=>{
     navigation.navigate('CategorieStack');
   }
   const[modalOpen,setModalOpen]=useState(false);
    return (
      <View style={styles.container}>
        <RadioButton PROP={PROP}  />      
        <TextInput
          style={styles.input}
         placeholder="amount"  
         placeholderTextColor="#177685"></TextInput>      
         <Text style={styles.label}>Categories</Text>
         <View  style={styles.textContainer}>
        <View style={styles.icon} ><MaterialIcons name="category" size={35} color="white" onPress={pressHandler1}/></View>
     
      <Modal visible={modalOpen} animationType='slide' >
        <View style={styles.container}>
        <MaterialIcons name="close" size={35} color="blue" style={styles.modaltogle} onPress={()=>{setModalOpen(false)}}></MaterialIcons>
          <Create></Create>
  
          </View>
          </Modal>
 
 
 
 <View style={styles.icon} ><MaterialIcons name="add-circle" size={35} color="white" onPress={()=>{setModalOpen(true)}}/></View>
</View>
<Text>    choose          create</Text>
        
<View style={styles.double}><Text style={styles.label} >Date</Text><TestDate></TestDate></View>
          <TextInput
          style={styles.input}
         placeholder="add comment"  
         placeholderTextColor="#177685"></TextInput>
          <View style={styles.button}><Button title='Add' color="#EBE119"></Button></View>

      </View>
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
    height:80,
    width:100,
    
  },
  label: {
    fontSize:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold',
    color:'#177685',
    paddingRight:15
    
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
  }
});
export default Addition;