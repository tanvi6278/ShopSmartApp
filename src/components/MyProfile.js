import React from "react";
import {Pressable,View,Text,Image} from "react-native"

const MyProfile = (props)=>
{
    
   return(
            
    <Pressable  style={[{
      height: 60,
      width: "90%",
      marginTop: 20,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 5,
      justifyContent: "space-between",
      paddingHorizontal: 15,
      backgroundColor: "#ececec"
  }, props.containerStyle]}>
    <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
    <Image style={[{height:25,width:17},props.imageStyle]} source={props.imageSource} />
    <Text style={[{fontSize:17,color:"#000",fontWeight:'500',marginHorizontal:15},props.textStyle]} >
          {props.name}
    </Text>
    </View>
    <Image style={{height:20,width:20}} source={props.imageSrc} />
</Pressable>
   )

}
export default MyProfile;