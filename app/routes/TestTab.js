import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator}from 'react-navigation-tabs';
import{createStackNavigator}from'react-navigation-stack';
import Expenses from '../screens/Expenses'
import Income from '../screens/Income'
import Header from '../shared/header';
import Addition from '../screens/Addition';
import CategorieStack from "../routes/CategorieStack";
const Tabs=createMaterialTopTabNavigator(
    { Expenses:{
         screen:Expenses
    },
     Income:{
         screen:Income
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
const MainTabs=createStackNavigator(
    {Tabs:{
        screen:Tabs,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
        },
    },
    Addition:{
        screen:Addition,
        navigationOptions:{
            headerTitle:null,
            headerStyle: {backgroundColor:"#87CEEB"}
        },
    },
    CategorieStack:{
         screen:CategorieStack,
         navigationOptions:{
             headerShown:false
         }
    }
   
    }
   
);
export default createAppContainer(MainTabs);

//export default createAppContainer(MainTabs);

