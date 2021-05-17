
import React,{ useState } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function Categories({navigation}){const [categorie,setCategorie]=useState([
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
  
const pressHandler=(color)=>{
    navigation.getParam("OnSelect")(color);
    navigation.goBack();
   
   }
   const[nameSub,setNameSub]=useState('');
   OnSelectSub=(data)=>{
     setNameSub(data);
   
   }
return(
    <View style={styles.container}>
         <Text style={styles.Title}>All the Categories</Text>
        <FlatList
        data={categorie}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.item}
           onPress={()=>{navigation.navigate(item.dest,{OnSelectSub:OnSelectSub, test:'addition'});}}>
            <View style={{width:40,
height:40, 
backgroundColor:item.color,
borderRadius:40,
 position:'relative',
justifyContent:'center',
alignItems:'center',
marginLeft:10}} ><FontAwesome name={item.nameIcon} size={27} color="white"/></View>
            <Text style={styles.name}>{item.name}</Text>
            {(navigation.getParam('test'))=='addition'?(
             <FontAwesome style={styles.check} name="check" size={27} color="green" onPress={()=>{ navigation.getParam("OnSelect")({color:item.color,name:item.name,nameSub:nameSub}); navigation.goBack(null)}}></FontAwesome>):null}
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
   marginRight:10
}

});
export default Categories;