import React,{useState} from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,Alert} from 'react-native';
import FlatButton from '../Components/Buttons';
import axios from 'axios';

function ForgetPassword(){
  const [email,setEmail]=useState('');
   function functionOne (){axios.post('	http://192.168.1.9:8080/api/account/reset-password/init',{
    email:email,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);});}
   function functionTwo() {
    Alert.alert('password','check your email to create your new password');
   }
    return(
      <View style={styles.container}>
           <TextInput 
         style={styles.input} 
         placeholder="email" 
         placeholderTextColor="white"
         onChangeText={(email)=>setEmail(email)}
         value={email}
         textContentType="emailAddress"
         keyboardType="email-address"
         ></TextInput>
        <FlatButton text='LOGIN' onPress={() => {functionOne();functionTwo();}}/>
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
 
  });

export default ForgetPassword;