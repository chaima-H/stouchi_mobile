import React,{Component} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity} from 'react-native';

function Footer ({props}){
    const pressHandler=()=>{
       this.props.navigate('Addition');
        }
        return(
            <View style={styles.container}>
              <View style={styles.innerContainer}>
              <TouchableOpacity >
    <View style={styles.button}>
        <Text style={styles.buttonText}>budget</Text>
    </View>
    </TouchableOpacity>
                  <Button title=' + ' color="#87CEEB" onPress={pressHandler}></Button>
              </View>
            </View>
        );
    }

const styles = StyleSheet.create({
  
    container: {  
        flex: 1,  
        padding: 26,  
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  ,
        
        
    },  
    innerContainer:{  
       // flex: 1,  
        width: "100%",  
        flexDirection: "row",  
        justifyContent: "space-between",  
        alignItems: "center"  ,
        marginTop:500
        
        
    },  
    button:{
        borderRadius:20,
        paddingHorizontal:50,
        paddingVertical:12,
        backgroundColor:"#eee",
          },
       buttonText:{
           color:"#87CEEB",
           fontWeight: 'bold',
           fontSize : 25,
           textAlign:'center',
       }
    
});

export default Footer;