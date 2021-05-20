import React ,{useEffect,useState}from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,SafeAreaView} from 'react-native';
import PureChart from 'react-native-pure-chart';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseUrl from '../services/api';

function ChartScreen({navigation}){
  const[dataPie,setDataPie]=useState([
    {
      value: 100,
      label: '',
      color: 'grey',
    }, 
   
  ]);
      const[dataBar, setDataBar]=useState([]);
      
      useEffect(()=>
         {console.log( "text"+AsyncStorage.getItem('token'));
            AsyncStorage.getItem('token').then(
                res=>{
                    console.log(res);
                    const config={
                        headers:{
                            Authorization:'Bearer '+ res
                        }
                    };
                
                axios.get(baseUrl+'api/categories/pieglobale',config).then(
                    res=>{
    
                        console.log(JSON.stringify(res.data));
                       let sum=0;
                        for (let item of res.data){
                            console.log(JSON.stringify(item));
                            sum+=item.value;
                        }
                        if (sum>0) {setDataPie(res.data);}
                    
                },
                    err=>{console.log(err);}
                )
                axios.get(baseUrl+'api/history-lines/multiseries',config).then(
                  res=>{
  
                      console.log(JSON.stringify(res.data));
                      console.log("winek"+JSON.stringify(res.data[0].data));
                      setDataBar(res.data);
                     
                  
              },
                  err=>{console.log(err);}
              )
                },
                err=>{console.log(err);}
            )
        },[setDataPie,setDataBar]);
         console.log(dataBar)
    
     /// var data =[30, 200, 170, 250, 10]
      const openMenu=()=>{
        navigation.openDrawer();
       }
    return(
       
       <View style={styles.container}>
          <View style={styles.header}><MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/></View>
             <View style={styles.v1}><Text style={styles.label}>Pie chart Expenses/Incomes</Text>< PureChart  width={'100%'}
    height={200} data={dataPie} type='pie'/></View>
            <View style={styles.v2}><Text style={styles.label}>Bie chart Expenses/Incomes</Text><PureChart  width={'100%'}
    height={150} data={dataBar} type='line'/></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      },
      v1:{
        flex: 1,  
        padding: 15,  
         backgroundColor: "#fff",  
         alignItems:'center'  ,
         borderWidth:1,
         borderColor:'#BFC9CA' ,
         width:"90%",
         margin:15,
         shadowColor: '#000000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.9,
         shadowRadius: 3,
         elevation: 3,
 
      alignItems:'center',
      justifyContent:'center'
      },
      v2:{
        flex: 1,     
         alignItems:'center'  ,     
         margin:15,     
        },
       header:{
        
         backgroundColor:'#87CEEB',
         height:"12%",
         width:"100%",
         
        alignItems:'center',
        justifyContent:'center',
         
       },
       icon:{
        position:'absolute',
        left: 15,
        top:40
       },
       label: {
        fontSize:20,
        marginBottom:10,
       
        fontWeight:'bold',
        color:'#87CEEB',
        
        
      },

      })
export default ChartScreen;