import React from "react";
import {Pressable,View,Text,Image} from "react-native"

const MyOrders= ()=>
{
    
   return(
            
    <Pressable style={{height:60,width:"48%",marginTop:10,
     borderRadius:5,paddingHorizontal:15,justifyContent:"center",
      backgroundColor:"#ececec"}}>
    <View style={[{flexDirection:"row",
     justifyContent:"space-between",width:"85%"},props.imageStyle]}>
    <Image style={[{height:25,width:25},props.imageStylesheet]} source={require('../icons/logo.png')} />
    <Text style={[{fontSize:17,color:"#000",fontWeight:'500'},props.textStyle]}>
          sample data
    </Text>
    </View>

</Pressable>
   )

}
export default MyOrders;