import React from 'react';
import { View , StyleSheet,TextInput,Image,TouchableOpacity,Text,SafeAreaView} from 'react-native';
import PureChart from 'react-native-pure-chart';
import { MaterialIcons } from '@expo/vector-icons';

function ChartScreen({navigation}){
    let sampleData = [
        {
          value: 50,
          label: 'Marketing',
          color: 'red',
        }, {
          value: 40,
          label: 'Sales',
          color: 'blue'
        }, {
          value: 25,
          label: 'Support',
          color: 'green'
        }
     
      ]
      var data = [
        {
          seriesName: 'series1',
          data:[
            {x: '2017-10-01', y: 30}, 
            {x: '2017-10-02', y: 200}, 
            {x: '2017-10-03', y: 170}
          ],
          color: 'blue'
        },
        
      ]
     /// var data =[30, 200, 170, 250, 10]
      const openMenu=()=>{
        navigation.openDrawer();
       }
    return(
       
       <View style={styles.container}>
          <View style={styles.header}><MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/></View>
             <View style={styles.v1}><PureChart data={sampleData} type='pie'/></View>
             <View style={styles.v2}><PureChart data={data} type='bar'/></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      },
      v1:{
      flex:1,
  
      alignItems:'center',
      justifyContent:'center'
      },
      v2:{
        flex:1,
    
        alignItems:'center',
      justifyContent:'center'
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
       }
      ,})
export default ChartScreen;