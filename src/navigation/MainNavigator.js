import React,{useState,useEffect} from "react";


import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomNavigation from "./BottomNavigation";
import Collection from "../components/Collection";
import Product from "../screens/Product";
import JewelleryDesc from "../screens/JawelleryDesc";
import Splash from "../screens/Splash";
import CategoryList from "../screens/CategoryList";
import Laptops from "../screens/Categories/Laptops";
import Fragrances from "../screens/Categories/Fragrances";
import Skincare from "../screens/Categories/Skincare";
import Groceries from "../screens/Categories/Groceries";
import HomeDecoration from "../screens/Categories/HomeDecoration";
import Furniture from "../screens/Categories/Furniture";
import SearchItem from "../screens/SearchItem";
import CartDetails from "../screens/CartDetails";






const Stack = createNativeStackNavigator();

const MainStack = ()=>
{

  const [splashScreen ,setSplashScreen] = useState(true)

    useEffect( () =>{
      setTimeout( () =>{
        setSplashScreen(false)
     },2000)
    },[])

  return(
    
      <Stack.Navigator>
        {
          splashScreen ? (
            <Stack.Screen name="Splash" component={Splash}/>
          ) : null
        }
       <Stack.Screen name="BottomNavigation" component={BottomNavigation}  options={{headerShown:false}}/>
       <Stack.Screen  name="Collection" component={Collection}/>
        <Stack.Screen  name="Product" component={Product}/>
        <Stack.Screen name="JewelleryDesc" component={JewelleryDesc} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="Laptops" component={Laptops} />
        <Stack.Screen name="Fragrances" component={Fragrances} />
        <Stack.Screen name="Skincare" component={Skincare} />
        <Stack.Screen name="Groceries" component={Groceries} />
        <Stack.Screen name="HomeDecoration" component={HomeDecoration} />
        <Stack.Screen name="Furniture" component={Furniture} />
        <Stack.Screen name="SearchItem" component={SearchItem} />
        <Stack.Screen name="CartDetails" component={CartDetails} />
      </Stack.Navigator>           

 
  )
}
export default MainStack;