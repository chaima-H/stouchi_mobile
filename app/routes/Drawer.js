import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import HomeStack from "./HomeStack";
import CategorieStack from "../routes/CategorieStack"
import account from"../screens/accounts";
import goals from"../screens/goals";
import chart from"../screens/chart";
import Reminders from "../screens/Reminders";
import SideBar from "../Components/sideBar";
import React,{Component} from "react";
import {  MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import MainTabs from "../routes/TestTab";
import{createStackNavigator}from'react-navigation-stack';

const MainStack=createDrawerNavigator(
    {
    Home:{
        screen:MainTabs,
        navigationOptions:{
           drawerIcon:({tintColor})=><MaterialCommunityIcons name="home-heart" size={24} color={tintColor}/>
        }
    },
    Account:{
        screen:account,
        navigationOptions:{
            drawerIcon:({})=><MaterialIcons name="account-balance-wallet" size={24} color="blue"/>
         }
    },
    Categories:{
         screen:CategorieStack,
         navigationOptions:{
         drawerIcon:({tintColor})=><MaterialIcons name="category" size={24} color={tintColor}/>
        }
    },
    Chart:{
        screen:chart,
        navigationOptions:{
            drawerIcon:({tintColor})=><MaterialIcons name="pie-chart" size={24} color={tintColor}/>
           }
   },
   Reminder:{
    screen:Reminders,
    navigationOptions:{
        drawerIcon:({tintColor})=><MaterialCommunityIcons name="bell-alert" size={24} color={tintColor}/>
     }
},
Goals:{
    screen:goals,
    navigationOptions:{
        drawerIcon:({tintColor})=><MaterialCommunityIcons name="target" size={24} color={tintColor}/>
     }
},
},

   { contentComponent:props =><SideBar {...props}/>,
    hideStatusBar:true,
    contentOptions:{
        //activeBackgroundColor:"rgba(212,118,207,0.2)",
        activeTintColor:"#87CEEB",
        itemsContainerStyle:{
          marginTop:16,
          marginHorizontal:8,
        },
        itemStyle:{
            borderRadius:4
        }
    }
},
{initialRouteName:'Home'},
);
export default createAppContainer(MainStack);
