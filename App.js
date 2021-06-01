import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./app/routes/LoginStack";
//import LoginScreen from "./app/screens/LoginScreen";
//import Navigator from "./app/routes/Drawer";
//import Navigator from "./app/routes/CategorieStack";
//import MainScreenNavigator from "./app/routes/TestTab"
//import Addition from './app/screens/Addition';
//import Create from './app/Components/Create';
//import KidSpace  from "./app/screens/KidSpace";

export default function App() {
  return (

    <Navigator></Navigator>
  );
}