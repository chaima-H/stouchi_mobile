import React ,{useEffect,useState}from 'react';
import { View , StyleSheet,Image,TouchableOpacity,Text,SafeAreaView,FlatList} from 'react-native';
import { Card, Button,FAB} from 'react-native-elements'
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../services/api';

function KidSpace(){
    const categories=[
        {name:'Books',avatar:require('../assets/Books.png')},{name:'Toys',avatar:require('../assets/toys.png')},
        {name:'Movies',avatar:require('../assets/moviekid.jpg')},{name:'Clothes',avatar:require('../assets/clotheskid.png')},
        {name:'Apps',avatar:require('../assets/appkids.jpg')},{name:'Dining-out',avatar:require('../assets/dining.png')},
        ,{name:'Fun',avatar:require('../assets/Entertainment.jpg')} ,{name:'Custom',avatar:require('../assets/custom.png')}
    ]
    const Incomes=[
        {name:'Allowance',avatar:require('../assets/allowance.jpg')},{name:'Gifts',avatar:require('../assets/gift.jpg')},
        {name:'winning',avatar:require('../assets/competition.png')},{name:'Custom',avatar:require('../assets/custo.jpg')},
    ]
    return(
       <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <View style={styles.header}>
         <View style={styles.logoContainor}>
            <Image 
            style={styles.logo}
            source={require('../assets/avatar.png')} ></Image>
            <Text style={{color:'white',fontSize:20}}>name kid</Text>
          </View>
          <View  style={{position:'absolute',right:0, marginRight:10,flexDirection:'row'}}>

              <View style={{alignSelf:'center'}}>
              <Text style={{color:'white',fontSize:20}}>My pocket</Text>
              <Text style={{color:'white',fontSize:20}}>200$</Text></View>

              <MaterialCommunityIcons name="wallet" size={50} color='rgba(248, 220, 37, 1)' 
         /></View>
         </View>
         <Text style={styles.text}>My expenses</Text>
         <FlatList 
         numColumns={3}
         data={categories}
         renderItem={({item})=>(
         <Card containerStyle={{height:'90%',marginRight:4,width:'30%',marginLeft:7}}>
         <Card.Title style={{marginBottom:0}}>{item.name}</Card.Title>
         <Card.Divider style={{marginBottom:0}} />
        <Card.Image source={item.avatar} style={styles.logo}>
        </Card.Image>
        <Button
      buttonStyle={{marginTop:0,backgroundColor:'#87CEEB'}}
      title='ADD' />
       </Card> 
         )}/>
         <Text style={styles.text}>My Incomes</Text>
         <FlatList 
         numColumns={3}
         data={Incomes}
         renderItem={({item})=>(
         <Card containerStyle={{height:'90%',marginRight:4,width:'30%',marginLeft:7}}>
         <Card.Title style={{marginBottom:0}}>{item.name}</Card.Title>
         <Card.Divider style={{marginBottom:0}} />
        <Card.Image source={item.avatar} style={styles.logo}>
        </Card.Image>
        <Button
      buttonStyle={{marginTop:0,backgroundColor:'#87CEEB'}}
      title='ADD' />
       </Card> 
         )}/>
         <FAB icon={
    <FontAwesome5
      name="piggy-bank"
      size={40}
      color="#FC6DB0"
    />} color='rgba(248, 220, 37, 1)' placement='right' style={{ position:'absolute',bottom:0}} buttonStyle={{height:80,width:80,borderRadius:40}} />
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    
      },
      
      header:{
        
        backgroundColor:'#87CEEB',
        height:"18%",
        width:"100%",  
       alignItems:'center',
       justifyContent:'center', 
      },
      logo:{
        alignContent:'center',
        width:80,
        height:80,
        
      },
      text:{
        fontSize:20,
        marginBottom:5,
        marginTop:10,
        fontWeight:'bold',
   marginLeft:10
         
      },
      logoContainor:{
        alignItems:'center',
        flexGrow: 0.1,
        position:'absolute',
        left:0,
        marginLeft:15,
        paddingTop:20
      },
    
      })
export default KidSpace;