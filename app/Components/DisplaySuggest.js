import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TextInput,FlatList,TouchableOpacity,SafeAreaView 
,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import baseUrl from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



function DisplaySuggest () {

   const[suggestList,setsuggestList]=useState([]),
   
 handle=()=>{
   console.log( "text2"+AsyncStorage.getItem('token'));
 AsyncStorage.getItem('token').then(
  res=>{
      console.log(res+"test");
     const data = JSON.stringify({
        "color":this.state.selectedColor,
        "nameCatego":this.state.name,
        "type":this.state.value,
        "nameIcon":this.state.icon,
        "originType":"Catego",
     });
     console.log("zidha"+data);
      const config={
        url:baseUrl+'api/categories',
        method:'post',
          headers:{
              Authorization:'Bearer '+ res,
              'Content-Type': 'application/json',
          },
          data:data,
          

      };
      console.log("cc"+config);
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log("cc2"+config);
  },
  err=>{console.log(err);}
)
 }


    
    return (
      <KeyboardAvoidingView  style={{flex:1}} behavior={Platform.os=== "ios" ? "padding" : "height"}>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView  style={styles.container1}>
      <View>
       
        <FlatList
        numColumns={5}
        data={icons}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.item} onPress={()=>{this.setState({icon:item.name})}} >
            <View style={styles.item} ><FontAwesome name={item.name} size={27} color="white"/></View>
            </TouchableOpacity>
        )}/>  
        <Text style={styles.text}>Color</Text>
      
        <TouchableOpacity style={styles.button}
         onPress={this.handle}>
           
           <Text style={styles.buttonText}>Create</Text></TouchableOpacity> 
           
      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }


const styles = StyleSheet.create({
  container1: {
    flex: 1,   
    marginLeft:10
    
  },
  input:{
   borderBottomWidth:2,
   borderColor:"#87CEE0",
   width:'80%',
   marginBottom:20
  },
  item:{
    width:50,
    height:50, 
    backgroundColor:"#A9C3CA",
    borderRadius:40,
     position:'relative',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginHorizontal:5,
    marginVertical:5
    
  },
  text:{
    fontSize:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold',
    color:'#177685',
    paddingRight:15
     
  },
  button:{ borderRadius:20,
    height:40,
    width:150,
    backgroundColor:"#87CEEB",
    alignSelf:'center',
    marginTop:20,
    marginBottom:20
      },
   buttonText:{
       color:"white",
       fontWeight: 'bold',
       fontSize : 25,
       textAlign:'center',
   },
   cont:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginLeft:5
	},
	container: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
   
});
export default DisplaySuggest;