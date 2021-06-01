import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import GoalsScreen from "../screens/goals";
import Header from '../shared/header';
import NewGoal from "../Components/NewGoal";

const screens={
    GoalsScreen:{
        screen:GoalsScreen,
         navigationOptions:({navigation})=>{
             return{
                headerTitle:()=><Header navigation={navigation}/>,
                headerStyle: {backgroundColor:"#87CEEB"}
                
             }
         }
             
    },
    NewGoal:{
        screen:NewGoal,
        navigationOptions:({navigation})=>{
            return{
               headerTitle:()=><Header navigation={navigation}/>,
               headerStyle: {backgroundColor:"#87CEEB"}
               
            }
        }},
        

    
}
const GoalStack=createStackNavigator(screens);
export default GoalStack;