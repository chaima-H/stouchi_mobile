import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TextInput,FlatList,TouchableOpacity,SafeAreaView 
,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform, Alert,Modal} from 'react-native';
import { FontAwesome ,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';
import axios from 'axios';
import baseUrl from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestDate from './TestDate';
import { ScrollView } from 'react-native-gesture-handler';
import { Overlay,Button } from 'react-native-elements';



function NewGoal (){
  const [visible, setVisible] = useState(false);
  const[listSuggest,setlistSuggest]=useState([]);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const preesSugget=()=>{
    toggleOverlay();
    handleSuggest();
  }

    const icons=[{name:'car', color:'#FCD336',note:'New car'},{name:'home-heart',color:'#CFFC36',note:'Now home'},{name:'palm-tree',color:'#36FCD8',note:'Trip & Holidays'},
    {name:'charity',color:'#7B36FC',note:'Charity'},{name:'treasure-chest',color:'#36FC75',note:'emergency fund'},{name:'hand-heart',color:'#366CFC',note:'Medical care'},
    {name:'party-popper',color:'#FC367B',note:'Celebration'},{name:'baby-carriage',color:'#FC36F3',note:'Gfits to children'},{name:'home-currency-usd',color:'#FC7836',note:'Other'}];
    const[goal,setGoal]=useState('');
    const[amount,setAmount]=useState(0.0);
    const[icon,setIcon]=useState({name:'',color:''});
    const [dateDeb,setDateDeb]=useState('');
    const [dateFin,setDateFin]=useState('');
    
   
  
 const handle=(datefin)=>{
   console.log( "text2"+AsyncStorage.getItem('token'));
 AsyncStorage.getItem('token').then(
  res=>{
      console.log(res+"test");
     const data = JSON.stringify({
        "color":icon.color,
        "name":goal,
        "amountTot":amount,
        "periodicity":{
            "frequancy":"month",
            "dateDeb":dateDeb,
            "dateFin":datefin,}
     });
     console.log("first test"+data);
      const config={
        url:baseUrl+'api/objectives',
        method:'post',
          headers:{
              Authorization:'Bearer '+ res,
              'Content-Type': 'application/json',
          },
          data:data,
          

      };
      console.log("first cc"+config);
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Alert.alert('',"has been created");
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
        Alert.alert('',"not been created");
      })
      console.log("first cc2"+config);
  },
  err=>{console.log(err);}
)
}
const handleSuggest=()=>{
    console.log( "text2"+AsyncStorage.getItem('token'));
  AsyncStorage.getItem('token').then(
   res=>{
       console.log(res+"test");
      const data = JSON.stringify({
         "color":icon.color,
         "name":goal,
         "amountTot":amount,
         "periodicity":{
             "frequancy":"mois",
             "dateDeb":dateDeb,
             "dateFin":dateFin,}
      });
      console.log("zidha"+data);
       const config={
         url:baseUrl+'api/objectives/sugggestion',
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
         setlistSuggest(response.data);
         console.log(listSuggest);
         Alert.alert('',"has been created");
       })
       .catch(function (error) {
         console.log(JSON.stringify(error));
         Alert.alert('suggestions',);
       })
       console.log("cc2"+config);
   },
   err=>{console.log(err);}
 )
 }
 console.log(listSuggest);
    return (
      <KeyboardAvoidingView  style={{flex:1}} behavior={Platform.os=== "ios" ? "padding" : "height"}>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView  style={styles.container1}>
            <ScrollView>
      <View>
          <Text style={styles.text}>why are you saving?</Text>
        <TextInput style={styles.input} placeholder="name goal" placeholderTextColor="#8B8787"  onChangeText={(goal)=>setGoal(goal)}></TextInput>
        <TextInput style={styles.input} keyboardType='numeric' placeholder="Total Amount" placeholderTextColor="#8B8787"  onChangeText={(amount)=>setAmount(amount)}></TextInput>
        <Text  style={styles.text}>some things people save for</Text>
        <FlatList
        numColumns={3}
        data={icons}
        renderItem={({item})=>(
           <TouchableOpacity  onPress={()=>{setIcon({icon:item.name,color:item.color})}} >
            <View style={styles.space}>
            <View style={{width:80,
height:80, 
backgroundColor:item.color,
borderRadius:40,
 position:'relative',
justifyContent:'center',
alignItems:'center',
marginLeft:10}} ><MaterialCommunityIcons name={item.name} size={50} color="white"/></View>
</View>   
  <Text style={{alignSelf:'center'}}>{item.note}</Text>
            </TouchableOpacity>
        )}/>  
        
        <View style={styles.double}><Text style={styles.label} >Start date</Text><TestDate  setDate={(dateDeb)=>{setDateDeb(dateDeb)}}></TestDate></View>
          <View style={styles.double}><Text style={styles.label} >End date</Text><TestDate  setDate={(dateFin)=>{setDateFin(dateFin)}}></TestDate></View>
         
        <TouchableOpacity style={styles.button}
         onPress={()=>{handle(dateFin)}}>       
           <Text style={styles.buttonText}>Create</Text></TouchableOpacity> 
          
           <TouchableOpacity style={styles.button} onPress={preesSugget}
         >    
           <Text style={styles.buttonText}>Show suggestions</Text></TouchableOpacity> 
           <Overlay isVisible={visible} onBackdropPress={toggleOverlay} backdropStyle={{backgroundColor:"#87CEEB"}}
            fullScreen={false} overlayStyle={{width:'70%',height:'80%'}}
            ><View style={styles.overlayer}>
               
        <Text style={styles.text}>Suggestions</Text>
        <FlatList
        data={listSuggest}
        renderItem={({item})=>(<View style={styles.item}>
           <Text style={styles.text2}>{item.type}</Text>
           <Text>{item.note}</Text>
           <Text style={{color:'#FED944',fontWeight:'bold'}}>start date: {item.periodicity.dateDeb}</Text>
           <View style={{flexDirection:'row'}}>
           <Text style={{color:'#FED944',fontWeight:'bold'}}>end date: {item.periodicity.dateFin}</Text>
           <Button title='+'  buttonStyle={{marginLeft:50,marginTop:0,backgroundColor:'#FE4496'}}
              onPress={()=>{handle(item.periodicity.dateFin)}}
           ></Button>
           </View>
           </View>
  
  
            
        )}/>  
    </View>
      </Overlay>

      </View>
      </ScrollView>
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
   marginBottom:10
  },
  
  text:{
    fontSize:20,
    marginBottom:10,
    marginTop:10,
    fontWeight:'bold',
     
  },
  button:{ borderRadius:20,
    paddingVertical:5,
    paddingHorizontal:20,
    backgroundColor:"#87CEEB",
    alignSelf:'center',
    marginTop:20,
    marginBottom:10
      },
   buttonText:{
       color:"white",
       fontWeight: 'bold',
       fontSize : 20,
       textAlign:'center',
   },
   space:{
       margin:10
   },
   label: {
    fontSize:20,
    marginBottom:10,
    fontWeight:'bold',
    color:'#177685'
  },
  double:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-around'
    
    
  },
  overlayer: {
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
},

item:{
  marginTop:4, 
  borderBottomWidth:1,
  borderColor:"#BFC9CA",
  flexDirection:'row',
  flexWrap:'wrap',
  padding:4
   
  },
  text2:{
    fontSize:20,
    fontWeight:'bold',
    color:'#44BAFE'
     
  },
});
export default NewGoal;