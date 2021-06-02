import React ,{useEffect,useState}from 'react';
import { View , StyleSheet,Image,TouchableOpacity,Text,SafeAreaView,FlatList,Alert} from 'react-native';
import { Card, Button,FAB} from 'react-native-elements'
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../services/api';
import Dialog from "react-native-dialog";

function KidSpace(){
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const[amount,setAmount]=useState(0.0);

  const showDialog = () => {
    setVisible(true);
  };
  
  const showDialog1 = () => {
    setVisible1(true);
  };
  
  const showDialog2 = () => {
    setVisible2(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleCancel1 = () => {
    setVisible1(false);
  };
  const handleCancel2 = () => {
    setVisible2(false);
  };
  const handleAdd = (type) => {console.log( "text"+AsyncStorage.getItem('token'));
  AsyncStorage.getItem('token').then(
      res=>{

          console.log(res);
          const data = JSON.stringify({
            "login":infoKid.login,
            "firstName":type,
            "salary":amount,
          });
          console.log("showww"+data);
          const testUrl=baseUrl+'api/kid/add';
          const config={
            method: 'post',
            url:testUrl,
              headers:{
                  Authorization:'Bearer '+ res,
                  'Content-Type': 'application/json',

              },
              data:data
          };
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            Alert.alert("","added success");
           
          })
          .catch(function (error) {
            console.log(error);
            Alert.alert("","added fail");
           
          })
      },
      err=>{console.log(err);}
  )
    setVisible(false);
  };
  const handlePigy = () => {
  AsyncStorage.getItem('token').then(
      res=>{

          console.log(res);
          const data = JSON.stringify({
            "login":infoKid.login,
            "salary":amount,
          });
          console.log("show piggy"+data);
          const testUrl=baseUrl+'api/kid/piggy';
          const config={
            method: 'post',
            url:testUrl,
              headers:{
                  Authorization:'Bearer '+ res,
                  'Content-Type': 'application/json',

              },
              data:data
          };
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            Alert.alert("","added success");
           
          })
          .catch(function (error) {
            console.log(error);
            Alert.alert("","added fail");
           
          })
      },
      err=>{console.log(err);}
  )
    setVisible(false);
  };
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
    const[infoKid,setinfoKid]=useState({login:'name Kid',pocket:0.0});
    const[pigySolde,setpigySolde]=useState(0.0);
    useEffect(()=>
    {
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
              console.log("this is user usersolde"+res.data)
             setinfoKid({login:res.data.login,pocket:res.data.soldeUser});
             console.log('this is info kid'+infoKid);
            },
             err=>{
             console.log(err);
             }
         )
         axios.get(baseUrl+'api/kid/piggy',config).then(
          res=>{
           console.log("pigysolde"+res.data)
          setpigySolde(res.data);
          console.log('this is info kid'+infoKid);
         },
          err=>{
          console.log(err);
          }
      )
         },
         err=>{console.log(err);}
     )
         
   },[setinfoKid,pigySolde]);
    return(
       <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <View style={styles.header}>
         <View style={styles.logoContainor}>
            <Image 
            style={styles.logo}
            source={require('../assets/avatar.png')} ></Image>
            <Text style={{color:'white',fontSize:20}}>{infoKid.login}</Text>
          </View>
          <View  style={{position:'absolute',right:0, marginRight:10,flexDirection:'row'}}>

              <View style={{alignSelf:'center'}}>
              <Text style={{color:'white',fontSize:20}}>My pocket</Text>
              <Text style={{color:'white',fontSize:20}}>{infoKid.pocket}DT</Text></View>

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
      title='ADD' onPress={showDialog} />
      <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Dialog.Title>ADD Expenses</Dialog.Title>
        <Dialog.Description>
        Enter the amount taht you spent.
        </Dialog.Description>
        <Dialog.Input label="amount" keyboardType="numeric" onChangeText={(amount)=>setAmount(amount)}
         value={amount}></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="ADD" onPress={()=>{handleAdd('expense')}} />
      </Dialog.Container>
    </View>
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
      title='ADD' onPress={showDialog1} />
      <View style={styles.container}>
     
     <Dialog.Container visible={visible1}>
       <Dialog.Title>ADD Incomes</Dialog.Title>
       <Dialog.Description>
       Enter the amount taht you get.
       </Dialog.Description>
       <Dialog.Input label="amount" keyboardType="numeric" onChangeText={(amount)=>setAmount(amount)}
        value={amount}></Dialog.Input>
       <Dialog.Button label="Cancel" onPress={handleCancel1} />
       <Dialog.Button label="ADD" onPress={()=>{handleAdd('income')}} />
     </Dialog.Container>
   </View>
       </Card> 
         )}/>
         <FAB icon={
    <FontAwesome5
      name="piggy-bank"
      size={40}
      color="#FC6DB0"
    />} color='rgba(248, 220, 37, 1)' placement='right'
     style={{ position:'absolute',bottom:0}} buttonStyle={{height:80,width:80,borderRadius:40}} onPress={showDialog2} />
        <View style={styles.container}>
     
     <Dialog.Container visible={visible2}>
       <Dialog.Title>You have raised {pigySolde}</Dialog.Title>
       <Dialog.Description>
        enter how much you want to save
       </Dialog.Description>
       <Dialog.Input label="amount" keyboardType="numeric" onChangeText={(amount)=>setAmount(amount)}
        value={amount}></Dialog.Input>
       <Dialog.Button label="Cancel" onPress={handleCancel2} />
       <Dialog.Button label="ADD" onPress={handlePigy} />
     </Dialog.Container>
   </View>
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