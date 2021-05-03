import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/HomeScreen";
import Header from '../shared/header';
import Addition from '../screens/Addition';
const screens={
    HomeScreen:{
        screen:HomeScreen,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><Header navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
             
    },
    Addition:{
        screen:Addition,
        navigationOptions:({navigation})=>{
            return{
               headerTitle:()=><Header navigation={navigation}/>,
               headerStyle: {backgroundColor:"#87CEEB"}
               
            }
        }}
    
}
const HomeStack=createStackNavigator(screens);
export default HomeStack;