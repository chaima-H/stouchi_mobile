import React,{useState} from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,Alert} from 'react-native';
import FlatButton from '../Components/Buttons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgetPassword from './ForgetPassword';
import {FontAwesome5} from '@expo/vector-icons';
import baseUrl from '../services/api';
import Toast from 'react-native-toast-message';
import {FAB} from 'react-native-elements'
function LoginScreen({navigation}) {
const [Username,setUsername]=useState('');
const[Password,SetPassword]=useState('');
const[typeUser,settypeUser]=useState('');
const pressHandler2=(type)=>{
  if(type == "adult") {
    navigation.navigate('Home');
  }
  else if(type == "Kid") {
    navigation.navigate('KidSpace');
  }
  }
  const pressHandler=()=>{
navigation.navigate('Register');
}
  return (
    
        <View style={styles.container}>
             <Toast ref={(ref) => Toast.setRef(ref)} />
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
        <FlatButton text='LOGIN' onPress={() => {axios.post(baseUrl+'api/authenticate',{
          username:Username,
           password:Password,
        })
        .then(res=>{
          AsyncStorage.setItem('token',res.data.id_token).then(
            res=>{
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
                     console.log(JSON.stringify(res.data));
                    settypeUser(res.data.typeUser); 
                    },
                    err=>{
                    console.log(err);
                    })})
                    console.log('it s here');
            
            }
          ); {typeUser=="kid"?navigation.navigate('KidSpace'):null}
          {typeUser=="adult"?navigation.navigate('Home'):null}
        },)


        .catch(function (error) {
          console.log(error);
          Toast.show({
            text1: 'error',
          });})
          }} />
        <TouchableOpacity style={{ paddingTop:20, alignItems:'center'}} onPress={pressHandler}>
          <Text style={{color:"white"}}>Don't have an account?Sign Up Now</Text></TouchableOpacity>
        <TouchableOpacity  style={{alignItems:'center'}} onPress={()=>{navigation.push('ForgetPassword');}}>
        <Text style={{color:"white"}}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <FAB icon={
    <FontAwesome5
      name="child"
      size={35}
      color="#4460FE"
    />} color='#FED51E' placement='right' style={{ position:'absolute',bottom:0}} buttonStyle={{height:60,width:60,borderRadius:40}}
    onPress={()=>{navigation.push('RegisterKid');}} />
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
  TextContainer:{
    flexDirection:'row'
  }
 
  });

export default LoginScreen;