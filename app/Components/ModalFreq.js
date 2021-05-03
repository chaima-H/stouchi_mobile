import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
const Categories=['day','week','month','trimester','semester','year'];
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
const ModalFreq=(props)=>{
   const onPressItem=(option)=>{
     props.changeModalVisibility(false);
     props.setData(option);

   }
    
 const option=Categories.map((item,index)=>{
     return(
         <TouchableOpacity style={styles.option}
         Key={index}
         onPress={()=>{onPressItem(item)}}>
             <Text style={styles.text}>{item}</Text>
         </TouchableOpacity>
     )
 })
    return(

        <TouchableOpacity onPress={()=>props.changeModalVisibility(false)}
        style={styles.container}>
         <View style={[styles.modal , {width : WIDTH-20 , height: HEIGHT/1.5}]}>
             <ScrollView>{option}</ScrollView>
         </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
    },
    modal:{
        backgroundColor:'#C9D4D9',
        borderRadius:10,

    },
    option:{
        alignItems:'center',
        borderBottomColor:'#DBE5E9',
        borderBottomWidth:1
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        color:'#177685'
    }


})
export{ModalFreq}