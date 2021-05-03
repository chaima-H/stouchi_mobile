import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Categories from "../screens/Categories"
import FoodCategorie from "../screens/FoodCategorie"
import HousingCategorie from '../screens/HousingCategorie';
import HealthCategorie from '../screens/HealthCategorie';
import PubliCategorie from '../screens/PubliCategorie';
import TransportCategorie from '../screens/TransportCategorie';
import EducationCategorie from '../screens/EducationCategorie';
import FunCategorie from '../screens/FunCategorie';
import VariousCategorie from '../screens/VariousCtaegorie';
import UnexCategorie from '../screens/UnexCategorie';
import IncomeCategorie from"../screens/IncomeCategorie";
import OtherHead from '../shared/OtherHead';
import ModifScreen from '../screens/ModifScreen';
import Addition from '../screens/Addition';
const screens={
    Categories:{
        screen:Categories,
          navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    FoodCategorie:{
        screen:FoodCategorie,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    HousingCategorie:{
        screen:HousingCategorie,
        navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    HealthCategorie:{
        screen:HealthCategorie,
        navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    PubliCategorie:{
        screen:PubliCategorie,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    TransportCategorie:{
        screen:TransportCategorie,
        navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    EducationCategorie:{
        screen:EducationCategorie,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    FunCategorie:{
        screen:FunCategorie,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    VariousCategorie:{
        screen:VariousCategorie,
        navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    UnexCategorie:{
        screen:UnexCategorie,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    IncomeCategorie:{
        screen:IncomeCategorie,
       navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><OtherHead navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
    },
    ModifScreen:{
        screen:ModifScreen,
        navigationOptions:{
            headerStyle:{backgroundColor:"#87CEEB"},
            headerTitle:null
        }
      
    },
    Addition:{
        screen:Addition,
        
    },
}
const CategorieStack=createStackNavigator(screens);
export default createAppContainer(CategorieStack);