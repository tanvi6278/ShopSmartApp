import React, { useState } from "react";
import { View,Text, Image, FlatList,Pressable } from "react-native";


const Fragrances = () =>
{
   
     return(
        <View>
          {/* FlatList */}

        <Pressable style={{paddingHorizontal:10}}>
             <View style={{height:230,width:170,borderRadius:5,alignItems:"center",paddingHorizontal:5,
             marginTop:10,
             borderWidth:0.3,borderColor:"grey"}}>
                <View style={{height:130,width:142,alignItems:"center",borderRadius:5,marginTop:7,
                    borderWidth:0.3,borderColor:"grey"}}>
                 <Image style={{height:110,marginTop:10,
                    width:121}} source={require('../../icons/logo.png')} /> 
                </View>
               
               <View>
               <Text style={{ 
                   color:'#000',fontSize:12,marginTop:5,fontWeight:'400',
                  }}>sample data</Text>
                 <Text style={{
                     color:'#000'
                 }}>sample data</Text>
               </View>
             </View>        
        </Pressable>
       
        </View>

     )

}
export default Fragrances;