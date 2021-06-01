import React,{Component,useEffect,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PureChart from 'react-native-pure-chart';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import baseUrl from '../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
function Incomes ({navigation}){
    const[budget,setBudget]=useState('');
    const[databar,setDatabar]=useState([30, 200, 170, 250, 10]);
    const [listHist,setlistHist]=useState([]);
  

    const pressHandler=()=>{
        navigation.navigate('Addition');
         } 
       useEffect(()=>
         {
             console.log( "text"+AsyncStorage.getItem('token'));
          AsyncStorage.getItem('token').then(
                res=>{
                    console.log(res);
                    const config={
                        headers:{
                            Authorization:'Bearer '+ res
                        }
                    };
                     axios.get(baseUrl+'api/usersolde',config).then(
                        res=>{
        
                            console.log(res.data);
                            console.log("it s me"+ res.data);
                        setBudget(res.data);},
                        err=>{console.log(err);}
                    )
                axios.get(baseUrl+'api/categories/barchartrevenus',config).then(
                    res=>{
    
                        console.log(JSON.stringify(res.data));
                      
                        setDatabar(res.data);
                    
                },
                    err=>{console.log(err);}
                )
                axios.get(baseUrl+'api/history-lines/all',config).then(
                    res=>{
    
                        console.log("history"+ JSON.stringify(res.data));
                    setlistHist(res.data);},
                    err=>{console.log(err);}
                )
                },
                err=>{console.log(err);}
            )
        
        },[setBudget,setDatabar,setlistHist]);
         console.log(databar)
        return(
            <View style={styles.container}>
              

            <View style={{marginTop:10,marginBottom:10}}>
                
               <View ><PureChart   width={'0%'}
    height={150}data={databar} type='bar'/></View></View>
               <View style={styles.containerHist}>
                {listHist.length==0?<Text style={{textAlign:'center',marginTop:100}}>No history added!</Text> : <FlatList
                   data={listHist}  
                    renderItem={({item})=>(item.typeCatego=="Revenus"?(<View style={styles.item}>
                         
                        <View style={{width:30,
            height:30, 
            backgroundColor:item.color,
            borderRadius:40,
            marginLeft:10,
            marginBottom:2
            }} ></View>
            
                        <Text style={styles.name}>{item.categoryName}</Text>
                        <Text style={{position:'absolute',right:8,marginTop:5,color:'black'}}>({item.dateModif})</Text>
                        <Text style={{position:'absolute',right:8,marginTop:20,color:'blue'}}>{item.montant}</Text>
                        <Text style={{position:'absolute',marginLeft:10,marginTop:35,color:'blue'}}>{item.note}</Text>
                        </View>
                        
                        
                    ):null)}/>  }
              </View>
            <View style={styles.foot}>
           
            <TouchableOpacity >
  <View style={styles.button}>
      <Text style={{color:"black", alignSelf:'center'}}>main balance</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.buttonText}>{budget}</Text>
      <FontAwesome5 name="coins" size={27} color="#F7EE27"/></View>
  </View>
  </TouchableOpacity>
                <TouchableOpacity style={styles.buttonadd} onPress={pressHandler}><Text style={{color:"white" ,fontSize:40}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
        
        
        );
    }


const styles = StyleSheet.create({
    container:{flex:1 ,
        alignItems:'center',
        backgroundColor: "#eee"},
      containerchart: {  
          flex: 3,  
         padding: 15,  
          backgroundColor: "#fff",  
          alignItems:'center'  ,
          borderWidth:1,
          borderColor:'#BFC9CA' ,
          width:"100%",
          margin:15,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
  
          
      },  
      containerHist: {  
          flex: 3,  
        //  paddingTop:100,  
          backgroundColor: "#fff",  
          alignContent:'center',
          width:"90%",
          borderWidth:1,
          borderColor:'#BFC9CA',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
          
        
         
      },  
      foot:{  
          flex: 0.75, 
          padding:10, 
          width: "90%",  
          flexDirection: "row",  
          justifyContent: "space-between",  
          alignItems: "center",
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
       
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:'#BFC9CA',
        margin:10
          
          
      },  
      button:{
          borderRadius:20,
          paddingHorizontal:25,
          paddingVertical:10,
          backgroundColor:"#eee",
            },
         buttonText:{
             color:"#87CEEB",
             fontWeight: 'bold',
             fontSize : 25,
             textAlign:'center',
             marginHorizontal:10
         },
         buttonadd:{
          borderRadius:40,
          paddingHorizontal:20,
          paddingVertical:5,
          backgroundColor:"#87CEEB",
         },
         item:{   
          borderBottomWidth:1,
          borderColor:"#BFC9CA",
          flexDirection:'row',
          flexWrap:'wrap',
          padding:5,
          paddingBottom:20
          
         
          },
          name:{
              fontSize:18,
              color:"#000",
              marginHorizontal:5,
              textAlignVertical:'center'
              },
  });
export default Incomes;