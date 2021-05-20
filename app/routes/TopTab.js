import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import{createStackNavigator}from'react-navigation-stack';
import { MaterialIcons } from '@expo/vector-icons';
class CustomHeader extends React.Component{
  render(){return(<View style={styles.header}><MaterialIcons name='menu' size={28} style={styles.icon}/><Text>home</Text></View>);}
}
const styles = StyleSheet.create({
  header:{
      width:'100%',
      height:'15%',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      backgroundColor:'#eee'

  },
  icon:{
    position:'absolute',
    left: 5
   }
})
class Expenses extends React.Component {
  
    render() {
      return (
      
        <View style={{ flex: 1 }}>
      <CustomHeader></CustomHeader>
          <Text>Expenses</Text>
          <Button title='+'></Button>
        </View>
      );
    }
  }
  
  class Income extends React.Component {
    render() {
      return (
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Income</Text>
          
          <Button title='+'></Button>
        </View>
      );
    }
  }
const Tabs=createBottomTabNavigator(
    { Expenses:{
         screen:Expenses
    },
     Income:{
         screen:Incomes
     },
    },
    {
        initialRouteName:"Expenses",
        lazyLoad:true,
        tabBarPosition:"top",
        swipeEnabled:true,
        tabBarOptions:{
            style:{
                height:50,
                backgroundColor:"#87CEEB",
                paddingBottom:3,
                paddingTop:3,
            },
            indicatorStyle:{
               backgroundColor:"#fff",
               elevation:10,
            },
            activeTintColor:'#fff',
            inactiveTintColor:"gray",
            
        }
    }
);
/*const MainScreenNavigator=createStackNavigator(
    {Tabs:{
        screen:Tabs,
        navigationOptions:{
          headerStyle:{
              backgroundColor:"#87CEEB",
          },
          headerBackTitleStyle:{
              color:'#fff',
          }
        },
    },

    }
);
export default createAppContainer(MainScreenNavigator);
*/


export default createAppContainer(Tabs);