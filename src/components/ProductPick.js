import React from "react";
import { Image, View } from "react-native"

const ProductPick = (props)=>
{
   return(
     <View style={{height:60,width:60,borderWidth:0.2,borderColor:"grey",alignItems:"center",justifyContent:"center",
     marginHorizontal:5,
     backgroundColor:"#fff",marginTop:10}}>
       <Image style={{height:45,width:45}} source={props.img} />  
          
     </View>

   )
}
export default ProductPick;