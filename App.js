import React,{useState,useEffect} from "react";

import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomNavigation from "./src/navigation/BottomNavigation";
import Product from "./src/screens/Product";
import Collection from "./src/components/Collection";
import JewelleryDesc from "./src/screens/JawelleryDesc";
import MainStack from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/Store";





const App = ()=>
{

  

  return(
    <Provider store={store}>
     <NavigationContainer>
     <MainStack/> 

     </NavigationContainer>
     </Provider>
  )
}
export default App;