import React from "react";
import { View ,Pressable,Text} from "react-native"
import { useNavigation } from "@react-navigation/native";

const Category = (props)=>
{
  const navigation = useNavigation();  

  return(
    <View style={{
      marginHorizontal:10,
    }}>
       
        
        <Pressable onPress={props.onPress}
         style={{height:80,width:160,alignItems:"center",marginTop:10,paddingHorizontal:5,
        backgroundColor:"red",justifyContent:"center", borderRadius:10}}>
            <Text style={{color:"#fff",fontWeight:"700",fontSize:17,textAlign:'center'}} numberOfLines={2}>
              {props.name}
            </Text>
        </Pressable>
        

    </View>
    
  )
}
export default Category;