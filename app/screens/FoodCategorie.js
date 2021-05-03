import React,{ useState } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
import { FontAwesome ,Ionicons} from '@expo/vector-icons';
function FoodCategorie(){
    const [categorie,setCategorie]=useState([
        {name:"Food",nameIcon:"fast-food",color:"red",key:'1'},
        {name:"Bar & Cafe",nameIcon:"cafe",color:"red",key:'2'},
        {name:"Restaurant",nameIcon:"restaurant",color:"red",key:'3'},
    ]);
    return(
        <View style={styles.container}>
             <Text style={styles.Title}>General Categorie</Text>
             <View style={styles.general}><View style={{width:40,
    height:40, 
    backgroundColor:"red",
    borderRadius:40,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
}} ><FontAwesome name="cutlery" size={27} color="white"/></View></View>
               <View style={styles.general}>  
                <Text style={styles.name}>Food & Drinks</Text></View>
                <Text style={styles.Title}>Sub-Categorie</Text>
            <FlatList
            data={categorie}
            renderItem={({item})=>(
               <TouchableOpacity style={styles.item}>
                <View style={{width:40,
    height:40, 
    backgroundColor:item.color,
    borderRadius:40,
     position:'relative',
  justifyContent:'center',
  alignItems:'center',
  marginLeft:10}} ><Ionicons name={item.nameIcon} size={27} color="white"/></View>
                <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            )}/>  
        </View>
    );
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#FFF",
    paddingTop:0,
   
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
    //flexWrap:'wrap',
    backgroundColor:'#CCC',
    textAlignVertical:'center',
    fontSize:18,
    paddingLeft:10,
  
},
general:{
    alignContent:'center',
    alignItems:'center',
 
}

});
export default FoodCategorie;