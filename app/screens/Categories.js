
import React,{ useState,useEffect } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseUrl from '../services/api';
import axios from 'axios';
import { Overlay } from 'react-native-elements';
function Categories({navigation}){
    const [listCatego,setlistCatego]=useState([]);
    const [visible, setVisible] = useState(false);
    const[visCatego,setvisCatego]=useState('');
  
  const toggleOverlay = () => {
    setVisible(!visible);
  };
    const visualisation=(name)=>{
        AsyncStorage.getItem('token').then(
            res=>{
                console.log(res);
                const config={
                    headers:{
                        Authorization:'Bearer '+ res,
                        
                    }
                };
     
            axios.get(baseUrl+'api/Categories/specificCategorie/'+ name,config).then(
             res=>{
 
                 console.log("visualisation try\n"+ JSON.stringify(res.data));
                 setvisCatego(res.data);},
             err=>{console.log(err);}
         )
            },
            err=>{console.log(err);}
        )
    }
    console.log("here visualisation"+visCatego);
    const pressOeil =(name)=>{
      toggleOverlay();
      visualisation(name);
    }
    useEffect(()=>
    {console.log( "text"+AsyncStorage.getItem('token'));
       AsyncStorage.getItem('token').then(
           res=>{
               console.log(res);
               const config={
                   headers:{
                       Authorization:'Bearer '+ res,
                       
                   }
               };
      
           axios.get(baseUrl+'api/categories/onlycatego',config).then(
               res=>{

                   console.log("lissstee catego"+ JSON.stringify(res.data));
                   setlistCatego(res.data);},
               err=>{console.log(err);}
           )
           console.log("test here"+test);
           axios.get(baseUrl+'api/Categories/specificCategorie/'+name,config).then(
            res=>{

                console.log("visualisation try\n"+ JSON.stringify(res.data));
                setvisCatego(res.data);},
            err=>{console.log(err);}
        )
           },
           err=>{console.log(err);}
       )
   },[setlistCatego]);
    console.log(listCatego);
    
    
    const [categorie,setCategorie]=useState([
    {name:"Food & Drinks",nameIcon:"cutlery",color:"red",dest:"FoodCategorie",key:'1'},
    {name:"Housing",nameIcon:"home",color:"#1DAED9",dest:"HousingCategorie",key:'2'},
    {name:"Healthcare",nameIcon:"heartbeat",color:"green",dest:"HealthCategorie",key:'3'},
    {name:"Public services",nameIcon:"tasks",color:"purple",dest:"PubliCategorie",key:'4'},
    {name:"Transportation",nameIcon:"bus",color:"#F37A21",dest:"TransportCategorie",key:'5'},
    {name:"Education",nameIcon:"graduation-cap",color:"#E90454",dest:"EducationCategorie",key:'6'},
    {name:"Fun",nameIcon:"smile-o",color:"#58CB39",dest:"FunCategorie",key:'7'},
    {name:"Various",nameIcon:"cart-plus",color:"#23289F",dest:"VariousCategorie",key:'8'},
    {name:"Unexpected",nameIcon:"warning",color:"#BB1616",dest:"UnexCategorie",key:'9'},
    {name:"Income",nameIcon:"dollar",color:"#F7EE27",dest:"IncomeCategorie",key:'10'},
]);

const supprimer=(name)=>{
    AsyncStorage.getItem('token').then(
        res=>{
            console.log(res);
            const config={
                headers:{
                    Authorization:'Bearer '+ res,
                    
                }
            };
 
        axios.delete(baseUrl+'api/categories/'+ name,config).then(
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
const pressHandler=(color)=>{
    navigation.getParam("OnSelect")(color);
    navigation.goBack();
   
   }
   const[nameSub,setNameSub]=useState('');
  const OnSelectSub=(data)=>{
     setNameSub(data);
   
   }
return(
    <View style={styles.container}>
         <Text style={styles.Title}>All the Categories</Text>
        <FlatList
        data={listCatego}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.item}
           onPress={()=>{navigation.navigate(item.dest,{OnSelectSub:OnSelectSub, test:'addition'});}}
           >
            <View style={{width:40,
height:40, 
backgroundColor:item.color,
borderRadius:40,
 position:'relative',
justifyContent:'center',
alignItems:'center',
marginLeft:10}} ><FontAwesome name={item.nameIcon} size={27} color="white"/></View>
            <Text style={styles.name}>{item.nameCatego}</Text>
            {(navigation.getParam('test'))=='addition'?(
             <FontAwesome style={styles.check} name="check" size={27} color="green" onPress={()=>{ navigation.getParam("OnSelect")({color:item.color,name:item.nameCatego,nameSub:nameSub}); navigation.goBack(null)}}></FontAwesome>)
             :<View style={styles.check}>
            <FontAwesome  style={styles.icon} name="eye" size={24} color="black" onPress={()=>{pressOeil(item.nameCatego)}} />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} backdropStyle={{backgroundColor:"#87CEEB"}}
            fullScreen={false} overlayStyle={{width:'70%',height:'40%'}}
            ><View style={styles.overlayer}>
                <View style={{width:40,
height:40, 
backgroundColor:visCatego.color,
borderRadius:50,
 position:'relative',
justifyContent:'center',
alignItems:'center',
marginLeft:10}} ><FontAwesome name={visCatego.nameIcon} size={27} color="white"/></View>
        <Text>{visCatego.nameCatego}</Text>
        <Text>amount:{visCatego.montant}</Text>
        <Text>min :{visCatego.minMontant}</Text>
        <Text>average:{visCatego.average} </Text>
        <Text>Modifcation date : {visCatego.modifDate}</Text>
        <Text>frequency : {visCatego.modifDate}</Text>
        <Text>fixed amount : {visCatego.modifDate}</Text>
        <Text>start date : {visCatego.modifDate}</Text></View>
      </Overlay>
             <FontAwesome  style={styles.icon} name="trash-o" size={24} color="black" onPress={()=>{supprimer(item.nameCatego)}}/></View>}
            </TouchableOpacity>
        )}/>  
          
    </View>
);
}
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:"#FFF",


},
name:{
fontSize:18,
color:"#000",
flexDirection:'column',
paddingTop:10,
paddingLeft:10

},
item:{
marginTop:5, 
borderBottomWidth:1,
borderColor:"#BFC9CA",
flexDirection:'row',
flexWrap:'wrap',
padding:5
 
},
icon:{width:50,
height:50, 
borderRadius:40,
 position:'relative',
justifyContent:'center',
alignItems:'center',
marginLeft:10
},
Title:{
height:50,
flexDirection:'row',
flexWrap:'wrap',
backgroundColor:'#CCC',
textAlignVertical:'center',
fontSize:20,
paddingLeft:10
},
check:{
   position:'absolute',
   right:0 ,
   marginRight:10,
   alignSelf:'center',
   flexDirection:'row',
   
},
icon:{
marginRight:5,
marginLeft:5,

},
overlayer: {
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
}
});
export default Categories;