import React,{ useState } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
import { FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons';
function TransportCategorie({navigation}){
    const [categorie,setCategorie]=useState([
        {name:"Public transport",nameIcon:"train",color:"#F37A21",key:'1'},
        {name:"Taxi",nameIcon:"taxi",color:"#F37A21",key:'2'},
        {name:"Travel",nameIcon:"airplane",color:"#F37A21",key:'3'},
        {name:"Insurance",nameIcon:"shield-check",color:"#F37A21",key:'4'},
        {name:"Vehicle maintenance",nameIcon:"car-cog",color:"#F37A21",key:'5'},
        {name:"Fuel",nameIcon:"fuel",color:"#F37A21",key:'6'},
        
    ]);
    return(
        <View style={styles.container}>
             <Text style={styles.Title}>General Categorie</Text>
             <View style={styles.general}><View style={{width:40,
    height:40, 
    backgroundColor:"#F37A21",
    borderRadius:40,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
}} ><FontAwesome name="bus" size={27} color="white"/></View></View>
               <View style={styles.general}>  
                <Text style={styles.name}>Transportation</Text></View>
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
  marginLeft:10}} ><MaterialCommunityIcons name={item.nameIcon} size={27} color="white"/></View>
                <Text style={styles.name}>{item.name}</Text>
                {(navigation.getParam('test'))=='addition'?(
             <FontAwesome style={styles.check} name="check" size={27} color="green" onPress={()=>{navigation.getParam("OnSelectSub")(item.name); navigation.goBack(null)}}></FontAwesome>):null}
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
 
},
check:{
   position:'absolute',
   right:0 ,
   marginRight:10
}

});
export default TransportCategorie;