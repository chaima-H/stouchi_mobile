import React from "react";
import {StyleSheet,TextInput,Text,View, Alert} from "react-native";
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

 function Register({navigation}){
  
  return(
   <View style={styles.container}>
     <Formik
     initialValues={{name:'',userName:'',email:'',password:'',soldeUser:'',salary:''}}
     onSubmit={(values, { setSubmitting }) => {
      axios.post(baseUrl+'api/register', {
        login: values.userName,
        password: values.password,
        email:values.email,
        firstName:values.name,
        soldeUser:values.soldeUser,
        salary:values.salary,
        typeUser:"adult"

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
          style={styles.input}
         placeholder="name"
         placeholderTextColor="white"
         onChangeText={props.handleChange('name')}
         value={props.values.name}
         ></TextInput>
         <TextInput
          style={styles.input}
         placeholder="Username"
         placeholderTextColor="white"
         onChangeText={props.handleChange('userName')}
         value={props.values.userName}
         ></TextInput>
         <TextInput 
         style={styles.input} 
         placeholder="email" 
         placeholderTextColor="white"
         onChangeText={props.handleChange('email')}
         value={props.values.email}
         ></TextInput>
         <TextInput 
         style={styles.input} 
         placeholder="Password" 
         secureTextEntry
         placeholderTextColor="white"
         onChangeText={props.handleChange('password')}
         value={props.values.password}
         
         ></TextInput>
         <TextInput 
         style={styles.input} 
         placeholder="Balance" 
         placeholderTextColor="white"
         onChangeText={props.handleChange('soldeUser')}
         value={props.values.soldeUser}
         
         ></TextInput>
          <TextInput 
         style={styles.input} 
         placeholder="Pay" 
         placeholderTextColor="white"
         onChangeText={props.handleChange('salary')}
         value={props.values.salary}
         ></TextInput>
          
        
           <FlatButton text='sign in' onPress={props.handleSubmit} />
         
         
       </React.Fragment>
     )}
     </Formik>

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

export default Register;