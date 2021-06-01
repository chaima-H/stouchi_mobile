import React,{useState,useEffect} from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,Alert,FlatList} from 'react-native';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../services/api';
import { FAB,Card,Button} from 'react-native-elements';



const GoalsScreen = ({navigation})=>{
  const pressHandler=()=>{
    navigation.navigate('NewGoal');
     }
     const[listGoals,setlistGoals]=useState([]);
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
                axios.get(baseUrl+'api/objectives',config).then(
                res=>{

                    console.log(res.data);
                    console.log("it s me objectives"+ res.data);
                setlistGoals(res.data);},
                err=>{console.log(err);}
            )
       
         
            },
            err=>{console.log(err);}
        )
    },[setlistGoals]);

     console.log(listGoals);
     
const supprimer=(name)=>{
  AsyncStorage.getItem('token').then(
      res=>{
          console.log(res);
          const config={
              headers:{
                  Authorization:'Bearer '+ res,
                  
              }
          };

      axios.delete(baseUrl+'api/objectives/'+ name,config).then(
       res=>{
         Alert.alert('',"deleted");
         },
         err=>{console.log(err);
          Alert.alert('',"Not deleted");}
   )
      },
      err=>{console.log(err);}
  )
}
   
    return(
              
       <View style={styles.container}>
       
        {listGoals.length!==0? <FlatList
         data={listGoals}
         renderItem={({item})=>(
          <Card>
          <View style={styles.item}><Card.Title>{item.name}</Card.Title>  
          <View style={{position:'absolute',right:0}}> 
          <View style={{width:40,
   height:40, 
   backgroundColor:item.color,
   borderRadius:40,
   position:'relative',
   justifyContent:'center',
   alignItems:'center',
   }} ><MaterialCommunityIcons name={item.nameIcon} size={27} color="white"/></View>
   </View></View>
           <Text> Total amount {item.amountTot}</Text>
           <Text> Start date {item.periodicity.dateDeb}</Text>
           <Text> End date {item.periodicity.dateFin}</Text>
           <Button icon={
    <MaterialCommunityIcons
      name="delete"
      size={20}
      color="white"
    />} onPress={()=>{supprimer(item.name)}}
      title="Delete" buttonStyle={{width:'35%',marginLeft:200}} containerStyle={{alignItems:'center'}} />
          </Card>     
          ) }
     ></FlatList>:<View style={styles.middleIcon}><View style={{width:110,
      height:110, 
      backgroundColor:"white",
      borderRadius:55,
       position:'relative',
      justifyContent:'center',
      alignItems:'center',
      }} ><FontAwesome name="fort-awesome" size={70} color="#BBBAB8"/></View>
      <Text style={styles.textGoal} >Add new goals</Text>
      <Text>save money and money will save you !</Text>
      </View>}

          <FAB title="+" onPress={pressHandler} color='#87CEEB' placement='right' style={{position:'absolute',bottom:0}} />
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#eee"
      },
      header:{
        
        backgroundColor:'#87CEEB',
        height:"12%",
        width:"100%",
        
       alignItems:'center',
       justifyContent:'center',
        
      },
      icon:{
        position:'absolute',
        left: 15,
        top:40
       },
       middleIcon:{
         alignItems:'center',
         justifyContent:'center',
         marginTop:200

       },
       textGoal:{
         fontSize:20,
         fontWeight:'bold',
         margin:10,
         
       },
       modaltogle:{
        borderWidth:1,
        borderColor:"#f2f2f2",
        borderRadius:10,

        padding:5,
        alignSelf:'flex-end',
        marginRight:10
      },
      item:{
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center'
         
        },
    })
export default GoalsScreen;
