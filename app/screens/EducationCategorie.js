import React,{ useState } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
import { FontAwesome ,MaterialIcons} from '@expo/vector-icons';
function EducationCategorie(){
    const [categorie,setCategorie]=useState([
        {name:"Registration",nameIcon:"app-registration",color:"#E90454",key:'1'},
        {name:"Remedial teaching",nameIcon:"menu-book",color:"#E90454",key:'2'},
        {name:"Supplies",nameIcon:"backpack",color:"#E90454",key:'3'},
        
        
    ]);
    return(
        <View style={styles.container}>
             <Text style={styles.Title}>General Categorie</Text>
             <View style={styles.general}><View style={{width:40,
    height:40, 
    backgroundColor:"#E90454",
    borderRadius:40,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
}} ><FontAwesome name="graduation-cap" size={27} color="white"/></View></View>
               <View style={styles.general}>  
                <Text style={styles.name}>Education</Text></View>
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
  marginLeft:10}} ><MaterialIcons name={item.nameIcon} size={27} color="white"/></View>
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
export default EducationCategorie;