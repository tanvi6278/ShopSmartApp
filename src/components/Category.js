import React from "react";
import { View ,Pressable,Text} from "react-native"


const Category = ()=>
{


  return(
    <View style={{
      marginHorizontal:10,
    }}>
       
        
        <Pressable 
         style={{height:80,width:160,alignItems:"center",marginTop:10,paddingHorizontal:5,
        backgroundColor:"red",justifyContent:"center", borderRadius:10}}>
            <Text style={{color:"#fff",fontWeight:"700",fontSize:17,textAlign:'center'}} numberOfLines={2}>
              sample data
            </Text>
        </Pressable>
        

    </View>
    
  )
}
export default Category;