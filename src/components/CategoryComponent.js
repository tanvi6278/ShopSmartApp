import React from "react";
import { Image, Pressable, Text, View } from "react-native"

const CategoryComponents = (props)=>
{
    return(
             <View style={{height:50,width:"100%",paddingHorizontal:8,
            }}>
                   
                  <Pressable onPress={props.onPress} style={{flexDirection:"row",width:"97%",marginTop:8,alignItems:"center",borderBottomWidth:1.8,
                  justifyContent:"space-between",paddingVertical:8,borderBottomColor:"#e6e6e6"}}>
                  <View style={{height:30,width:160,flexDirection:"row",alignItems:"center",gap:10
                   }}>
                       <Image style={{height:20,width:20}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{color:"grey",fontSize:14,fontWeight:'500'}}>
                           {props.name}
                       </Text>
                  </View>
                   <Image style={{height:20,width:20}} source={require('../icons/greater.png')} />

                  </Pressable>
             </View>

    )

}
export default CategoryComponents;
