import React,{ useState } from 'react';
import { View , StyleSheet,TouchableOpacity,Text,FlatList} from 'react-native';
import { FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons';
function FunCategorie({navigation}){
    const [categorie,setCategorie]=useState([
        {name:"Culture,Sporting events",nameIcon:"ticket",color:"#58CB39",key:'1'},
        {name:"Beauty & Wellness",nameIcon:"lipstick",color:"#58CB39",key:'2'},
        {name:"Hobbies & Passion",nameIcon:"heart-box",color:"#58CB39",key:'3'},
        {name:"Books",nameIcon:"library",color:"#58CB39",key:'4'},
        {name:"Subscriptions",nameIcon:"card-account-details-star",color:"#58CB39",key:'5'},
        {name:"Sport & Fitness",nameIcon:"handball",color:"#58CB39",key:'5'},
        
        
    ]);
    return(
        <View style={styles.container}>
             <Text style={styles.Title}>General Categorie</Text>
             <View style={styles.general}><View style={{width:40,
    height:40, 
    backgroundColor:"#58CB39",
    borderRadius:40,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
}} ><FontAwesome name="graduation-cap" size={27} color="white"/></View></View>
               <View style={styles.general}>  
                <Text style={styles.name}>Fun</Text></View>
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
export default FunCategorie;