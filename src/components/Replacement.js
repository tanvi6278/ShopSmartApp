import React from "react";
import {View,Text,Image} from "react-native";

const Replacement = (props)=>
{
   return(
  <View style={{width:100,alignItems:"center"}}> 
     <Image style={{height:20,width:20}} source={props.imageSource} />
      <Text style={[{fontSize:15,color:"#000"},props.textStyle]}>
          {props.name}
      </Text>
      <Text style={[{fontSize:15,color:"#000"},props.textReplace]}>
          {props.days}
      </Text>
  </View>         
 
   )
}
export default Replacement;