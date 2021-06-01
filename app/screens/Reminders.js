import React,{useState,useEffect} from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,SafeAreaView} from 'react-native';
import { MaterialIcons ,Ionicons,Entypo} from '@expo/vector-icons';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../services/api';
function ReminderScreen({navigation}){
    const openMenu=()=>{
        navigation.openDrawer();
       };
      const[notif,setNotif]=useState({});
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
                    axios.get(baseUrl+'api/notifications/displaynotif',config).then(
                    res=>{
    
                        console.log(res.data);
                        console.log("it s me"+ res.data);
                    setNotif(res.data);},
                    err=>{console.log(err);}
                )
           
             
                },
                err=>{console.log(err);}
            )
        },[setNotif]);
         console.log(notif)
     /*  const[items,setItems]=useState({
         '2021-05-20':[{name:'warning : 90% exceeded', montant:"500",category:"Food & Drinks", nameIcon:"warning",color:"yellow"},
         {name:'Danger:100% exceeded', montant:"600",category:"Food & Drinks",nameIcon:"skull",color:"red"},],
         '2021-05-22':[{name:'warning :95% exceeded', montant:"250",category:"Fun", nameIcon:"warning",color:"yellow"},
                       {name:'Update', montant:"210",category:"rent", nameIcon:"refresh-circle",color:"blue"}
        ],
        '2021-05-28':[{name:'warning :95% exceeded', montant:"250",category:"Fun", nameIcon:"warning",color:"yellow"},
                       {name:'Update', montant:"400",category:"taxes", nameIcon:"refresh-circle",color:"blue"}
        ],
       });*/
  
     
      const renderItem=(notif)=>{
        return(
         <Card>
         <View style={styles.item}><Card.Title>{notif.name}</Card.Title>
         
         <View style={{position:'absolute',right:0}}>
        
         <View style={{width:40,
height:40, 
backgroundColor:notif.color,
borderRadius:40,
 position:'relative',
justifyContent:'center',
alignItems:'center',
}} ><Ionicons name={notif.nameIcon} size={27} color="white"/></View>
</View></View>
          <Text>{notif.category}:{notif.montant}</Text>

         </Card>
        );
      };
    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.header}><MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/></View>
          <View style={{flex:1}}>
            
          <Agenda
          renderItem={renderItem}
          items={notif}
        /></View>
           </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    container:{
      flex:1,
      
      backgroundColor:'#87CEEB',
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
       item:{
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center'
         
        },
    })
export default  ReminderScreen;