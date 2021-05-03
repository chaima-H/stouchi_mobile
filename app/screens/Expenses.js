import axios from 'axios';
import React,{Component,useEffect} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity} from 'react-native';
import Footer from '../shared/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Expenses ({navigation}){
    const pressHandler=()=>{
        navigation.navigate('Addition');
         } 
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
                    axios.get('http://192.168.43.155:8080/api/account',config).then(
                    res=>{
    
                        console.log(res.data);
                    state.name=res.data.firstName;},
                    err=>{console.log(err);}
                )
                },
                err=>{console.log(err);}
            )
        },[]);
         
    
        return(
           
           
            <View style={styles.container}>
            <View style={styles.innerContainer}>
            <TouchableOpacity >
  <View style={styles.button}>
      <Text style={styles.buttonText}>budget</Text>
  </View>
  </TouchableOpacity>
                <Button title=' + ' color="#87CEEB" onPress={pressHandler}></Button>
            </View>
          </View>
        
        
        );
    }


const styles = StyleSheet.create({
    container: {  
        flex: 1,  
        padding: 26,  
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  ,
        
        
    },  
    innerContainer:{  
       // flex: 1,  
        width: "100%",  
        flexDirection: "row",  
        justifyContent: "space-between",  
        alignItems: "center"  ,
        marginTop:500
        
        
    },  
    button:{
        borderRadius:20,
        paddingHorizontal:50,
        paddingVertical:12,
        backgroundColor:"#eee",
          },
       buttonText:{
           color:"#87CEEB",
           fontWeight: 'bold',
           fontSize : 25,
           textAlign:'center',
       }
});
export default Expenses;