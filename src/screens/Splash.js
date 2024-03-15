import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";

const Splash = () => {
 
  

  return (
    <View  style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}}>
                 <Image style={{height:90,width:140}} source={require('../icons/logo.png')} />
         </View>
  ) 
  
}
export default Splash;

