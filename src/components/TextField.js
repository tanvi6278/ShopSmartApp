import React from "react";
import { View,TextInput, Text, Pressable } from "react-native"

const TextField = (props)=>
{
       return(
        <View>
         <View style={{
                width:'100%',
                paddingHorizontal:20,marginTop:10,
                alignItems:'center'
                }}>
              <View style={{
                  width:'100%',marginTop:8
              }}>
       
              <Text style={{
                  fontSize:16,color:"#000"
              }}>
                sample data
              </Text>
              <TextInput style={{height:60,width:"90%",borderRadius:30,borderWidth:0.5,
               paddingHorizontal:10, borderColor:"grey",marginTop:5}}
                placeholder="type here"
                  placeholderTextColor="#000"
              />
              </View>
              </View>
              
           </View>
       
     )

}
export default  TextField;