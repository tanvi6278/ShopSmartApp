import React, { useState } from "react";
import { FlatList, Text, View,Image, Pressable } from "react-native"
import { useSelector } from "react-redux";

const HomeDecoration = ({navigation}) =>
{

   const passData = (item) =>
   {
     navigation.navigate('Product',{item})

   }

    const [column,setColumn] = useState(2)
    const homeDecorationDesc = useSelector((state) => state.homeDecoration.homeDecorationItem)
    
    return(
            
            <View>
                  <FlatList 
                 key={column}
                  data={homeDecorationDesc}
                  keyExtractor={ (item) => item.id.toString()}
                  numColumns={column}
                  renderItem={({item})=> (

                    <Pressable onPress={() => passData(item)} style={{paddingHorizontal:10}}>
             <View style={{height:230,width:170,borderRadius:5,alignItems:"center",paddingHorizontal:5,
             marginTop:10,
             borderWidth:0.3,borderColor:"grey"}}>
                <View style={{height:130,width:142,alignItems:"center",borderRadius:5,marginTop:7,
                    borderWidth:0.3,borderColor:"grey"}}>
                 <Image style={{height:110,marginTop:10,
                    width:121}} source={{uri:item.thumbnail}} /> 
                </View>
               
               <View>
               <Text style={{ 
                   color:'#000',fontSize:12,marginTop:5,fontWeight:'400',
                  }}>{item.title}</Text>
                 <Text style={{
                     color:'#000'
                 }}>₹{item.price}</Text>
               </View>
             </View>        
        </Pressable>

                  )}
                    />

            </View>

    )

}
export default HomeDecoration;