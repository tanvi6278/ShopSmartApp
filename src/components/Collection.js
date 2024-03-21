import React, { useState } from "react";
import { View,Text,Image, Pressable } from "react-native"


const Collection = ()=>
{
   
    return(

        <Pressable>

 <View style={{
            height: 240, width: 170, borderRadius: 5,borderWidth:1,borderColor:"#e2dede",
            backgroundColor: "#fff", 
            marginTop: 10, alignItems: "center", justifyContent: "center",
            marginHorizontal:5
        }}>
            <Image
             style={{ height: 150, width: 150, marginTop: 10,borderWidth:0.3,borderColor:'grey',borderRadius:5}}
              source={require('../icons/logo.png')} />
            <Text style={{ marginTop: 15, fontSize: 14, fontWeight: "400",color:"#000" }}>
               sample data
            </Text>
            <View style={{flexDirection:"row",width:'80%',gap:8}}>
            <Text style={{fontSize:13,fontWeight:"400",color:"#000",
            fontWeight:'600'}}>
           sample data
            </Text>

            </View>
            </View>
            </Pressable>



    )

}
export default Collection;