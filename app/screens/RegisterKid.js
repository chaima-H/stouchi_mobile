import React from "react";
import {StyleSheet,TextInput,Text,View, Alert,Image} from "react-native";
import FlatButton from '../Components/Buttons';
import {Formik} from "formik";
import * as yup from "yup";
import axios from 'axios';
import baseUrl from '../services/api';
const validationSchema=yup.object({
  name: yup.string()
        .required(),
        
  userName: yup.string()
             .required()
             .max(50),
  email: yup.string().required()
          .email()    ,
   password: yup.string().required()
              .max(40)  ,
   // pay:  yup.string().required()     
});

 function RegisterKid({navigation}){
  
  return(
   <View style={styles.container}>
        <View style={styles.logoContainor}>
            <Image 
            style={styles.logo}
            source={require('../assets/avatar.png')} ></Image>
          </View>
     <Formik
     initialValues={{name:'',userName:'',email:'',password:'',soldeUser:''}}
     onSubmit={(values, { setSubmitting }) => {
      axios.post(baseUrl+'api/register', {
        login: values.userName,
        password: values.password,
        email:values.email,
        firstName:values.name,
        soldeUser:values.soldeUser,
        typeUser:"kid"

      })
      .then(res=>{
          
        navigation.goBack();}
        
      ,)
      .catch(function (error) {
        console.log(error);
      });
      console.log("Submitted Values:", values);
      setTimeout(() => setSubmitting(false), 3 * 1000);
      
    }}
     validationSchema={validationSchema}
     
     >
     {props=>(
       <React.Fragment>
         <TextInput
          style={styles.style1}
         placeholder="name"
         placeholderTextColor="white"
         onChangeText={props.handleChange('name')}
         value={props.values.name}
         ></TextInput>
         <TextInput
          style={styles.style2}
         placeholder="Username"
         placeholderTextColor="white"
         onChangeText={props.handleChange('userName')}
         value={props.values.userName}
         ></TextInput>
         <TextInput 
    style={styles.style3}
         placeholder="email" 
         placeholderTextColor="white"
         onChangeText={props.handleChange('email')}
         value={props.values.email}
         ></TextInput>
         <TextInput 
     style={styles.style4}
         placeholder="Password" 
         secureTextEntry
         placeholderTextColor="white"
         onChangeText={props.handleChange('password')}
         value={props.values.password}
         
         ></TextInput>
         <TextInput 
         style={styles.style5}
         placeholder="Pocket Money" 
         placeholderTextColor="white"
         onChangeText={props.handleChange('soldeUser')}
         value={props.values.soldeUser}
         
         ></TextInput>
        
          
        
           <FlatButton text='sign in' onPress={props.handleSubmit} />
         
         
       </React.Fragment>
     )}
     </Formik>

   </View>
  );
}
const input={
   
        borderWidth :0.5 ,
        borderColor: "white",
        width : 250,
        height: 50,
        borderRadius: 20,
        //backgroundColor: "#87CEE0",
        marginBottom : 20,
        textAlign:'center',
        fontSize: 20,
       
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
  },
 
 
 style1:{
     backgroundColor:'#26C6FD',
     ...input
 },
 style2:{
    backgroundColor:'#0EF960',
    ...input
},
style3:{
    backgroundColor:'#FDDC26',
    ...input
},
style4:{
    backgroundColor:'#CC26FD',
    ...input
},
style5:{
    backgroundColor:'#FD5726',
    ...input
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

export default RegisterKid;