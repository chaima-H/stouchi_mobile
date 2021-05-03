import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import ForgetPassword from"../screens/ForgetPassword";
import Drawer from"../routes/Drawer";
const screens={
    LoginScreen:{
        screen:LoginScreen,
         navigationOptions:{
             headerStyle:{backgroundColor:"#eee"}
         }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            headerStyle:{backgroundColor:"#eee"}
        }
    },
    ForgetPassword:{
        screen:ForgetPassword,
        navigationOptions:{
            headerStyle:{backgroundColor:"#eee"}
        }
    },
    Home:{
        screen:Drawer,
        navigationOptions:{
            header:null
        }
    }
}
const LoginStack=createStackNavigator(screens);
export default createAppContainer(LoginStack);