import React,{useState} from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,Alert} from 'react-native';
import FlatButton from '../Components/Buttons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
function LoginScreen({navigation}) {
const [Username,setUsername]=useState('');
const[Password,SetPassword]=useState('');

const pressHandler2=()=>{
  navigation.navigate('Home');
  }
  const pressHandler=()=>{
navigation.navigate('Register');
}
  return (
        <View style={styles.container}>
          <View style={styles.logoContainor}>
            <Image 
            style={styles.logo}
            source={require('../assets/logo.png')} ></Image>
          </View>
          <View style={styles.formContainer}>
         
         <TextInput
          style={styles.input}
         placeholder="Username"
         onChangeText={(Username)=>setUsername(Username)}
         value={Username}
         placeholderTextColor="white"></TextInput>
         <TextInput 
         style={styles.input} 
         onChangeText={(Password)=>SetPassword(Password)}
         value={Password}
         placeholder="Password" 
         secureTextEntry
         placeholderTextColor="white"
         ></TextInput>
        <FlatButton text='LOGIN' onPress={() => {axios.post('http://192.168.43.155:8080/api/authenticate',{
          username:Username,
           password:Password,
        })
        .then(res=>{
          
          AsyncStorage.setItem('token',res.data.id_token).then(
            res=>{navigation.navigate('Home');}
          );
        },)


        .catch(function (error) {
          console.log(error);})
          }} />
        <TouchableOpacity style={{ paddingTop:20, alignItems:'center'}} onPress={pressHandler}>
          <Text style={{color:"white"}}>Don't have an account?Sign Up Now</Text></TouchableOpacity>
        
          <TouchableOpacity  style={{alignItems:'center'}} onPress={()=>{navigation.push('ForgetPassword');}}>
        <Text style={{color:"white"}}>Forgot Password?</Text></TouchableOpacity>
        </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#87CEEB",
      alignItems: "center",
      justifyContent: "center",
    },
   input : {
    borderWidth :0.5 ,
    borderColor: "white",
    width : 250,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#87CEE0",
    marginBottom : 20,
    textAlign:'center',
    fontSize: 20,
   },
   logo:{
     
     width:100,
     height:100,
   },
   logoContainor:{
     alignItems:'center',
     flexGrow: 0.1,
   },

 
  });

export default LoginScreen;