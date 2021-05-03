import React,{useState,Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Modal, SafeAreaView,TextInput, Button} from 'react-native';
import {ModalPicker} from '../Components/ModalPicker';
import {ModalFreq} from '../Components/ModalFreq';
import TestDate from '../Components/TestDate';
const ModifScreen =()=>{
  const[chooseData,SetchooseData]=useState('choose category');
        const[isModalVisible,setisModalVisible]=useState(false);
        const[chooseDataFreq,SetchooseDataFreq]=useState('periodicity');
     
        const[isModalVisibleFreq,setisModalVisibleFreq]=useState(false);
    
        
        const changeModalVisibility=(bool)=>{
          setisModalVisible(bool)
        }
      const setData=(option)=>{
        SetchooseData(option)
      }
      const changeModalVisibilityFreq=(bool)=>{
        setisModalVisibleFreq(bool)
      }
 
    const setDataFreq=(option)=>{
      SetchooseDataFreq(option)
    }

      const [shouldShow,setshouldShow]=useState(false);
        return(
            <SafeAreaView style={styles.container}>
              <Text style={styles.label}>Name category</Text>
              <TouchableOpacity onPress={()=>changeModalVisibility(true)}
              style={styles.touchableOpacity}>
              <Text style={styles.text}>{chooseData}</Text></TouchableOpacity>
              <Modal transparent={true}
              animationType='fade'
              visible={isModalVisible}
              nRequestClose={()=>changeModalVisibility(false)}>
             <ModalPicker changeModalVisibility={changeModalVisibility}
              setData={setData}
              
           
              ></ModalPicker>
              </Modal>

              <View style={styles.double}><TextInput
          style={styles.input1}
         placeholder="min"
         placeholderTextColor="#177685"></TextInput>
         <TextInput
          style={styles.input1}
         placeholder="max"
         placeholderTextColor="#177685"></TextInput></View>

        
         <TextInput
          style={styles.input}
         placeholder="average"
         placeholderTextColor="#177685"></TextInput>

         <View style={styles.button}><Button  color="#177685" title='frequency' onPress={()=>{setshouldShow(!shouldShow)}}></Button></View>{shouldShow?(
         <View>
          <View style={styles.double}><Text style={styles.label} >Start date</Text><TestDate></TestDate></View>
          <View style={styles.double}><Text style={styles.label} >End date</Text><TestDate></TestDate></View>
          <TextInput
          style={styles.input}
         placeholder="amount"
         placeholderTextColor="#177685"></TextInput>
          <TouchableOpacity onPress={()=>changeModalVisibilityFreq(true)}
              style={styles.touchableOpacity}>
              <Text style={styles.text}>{chooseDataFreq}</Text></TouchableOpacity>
              <Modal 
                
              transparent={true}
              animationType='fade'
              visible={isModalVisibleFreq}
              nRequestClose={()=>changeModalVisibility(false)}>
             <ModalFreq changeModalVisibility={changeModalVisibilityFreq}
              setData={setDataFreq}
                  ></ModalFreq>
              </Modal></View>):null}
              
         <View style={styles.button}><Button  color="#EBE119"  title='Modify' ></Button></View>
              </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        alignItems:'center',
        marginLeft:2
        
           
    },
    text:{
      textAlign:'center',
      fontSize:20,
      paddingTop:10,
      color:'white'
    },
    touchableOpacity:{
       backgroundColor:"#87CEEB",
        paddingHorizontal:100,
        borderRadius:10,
    height: 50,
    marginLeft:5,
    
       
    },
    input : {  
      width:320,
      height: 40,
      borderBottomColor: "#87CEEB",
      borderBottomWidth:2,
      fontSize: 20,
      marginTop:20,
      marginBottom:10
      
     },
     Modal:{
       marginLeft:10
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
       justifyContent:'space-between'
       
       
     },
     input1 : {  
      width:150,
      height: 40,
      borderBottomColor: "#87CEEB",
      borderBottomWidth:2,
      fontSize: 20,
      marginHorizontal:5,
   },
   button:{
     
     alignSelf:'center',
     marginTop:15,
     marginRight:30
     
   },
});

export default ModifScreen;