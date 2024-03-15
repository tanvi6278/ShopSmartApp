import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Wishlist from "../screens/Wishlist";
import Account from "../screens/Account";



const Tab = createBottomTabNavigator();

const BottomNavigation = ()=>
{
    return(

        <Tab.Navigator>
               <Tab.Screen  name="Home" component={Home} 
               options={{headerShown:false,
               tabBarIcon:({}) =>
               {
                return(
                       <Image style={{height:25,width:25}} source={require('../icons/home.png')} />

                )
               }
                     }}/>




               <Tab.Screen   name="Cart" component={Cart} options={{headerShown:false,
                tabBarIcon :({}) =>
                {
                    return(
                        <Image style={{height:25,width:25}} source={require('../icons/cart.png')} />
                    )
                }

               }}/>
               <Tab.Screen  name="Wishlist" component={Wishlist}  options={{headerShown:false,
                 tabBarIcon: ({}) =>{
                       return(
                              
                             <Image style={{height:25,width:25}} source={require('../icons/wishlist.png')} />
                       )
                 }
                   }} />

               <Tab.Screen  name="Account" component={Account} options={{headerShown:false,
                 tabBarIcon: ({}) =>
                 {
                    return(
                        <Image style={{height:20,width:20}} source={require('../icons/account.png')} />
                    )
                 }
               }}/>

           </Tab.Navigator>
    
       
    )


}
export default BottomNavigation;