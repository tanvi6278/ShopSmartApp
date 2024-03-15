import React from "react";
import { FlatList, Text, View } from "react-native"
import { useSelector } from "react-redux";

const HomeDecoration = () =>
{

    const homeDecorationDesc = useSelector((state) => state.homeDecoration.homeDecorationItem)
    
    return(
            
            <View>
                  <FlatList 

                  data={homeDecorationDesc}
                  keyExtractor={ (item) => item.id.toString()}
                  renderItem={({item})=> (
                          <View>
                               <Text>
                                    {item.title}
                               </Text>
                               <View style={{height:130,width:142,alignItems:"center",borderRadius:5,marginTop:7,
                    borderWidth:0.3,borderColor:"grey"}}>
                 <Image style={{height:110,marginTop:10,
                    width:121}} source={{uri:item.thumbnail}} /> 
                </View>
               
               <View>
                               <Text>
                                    {item.price}
                               </Text>
                               <Text>{item.rating}</Text>
                              

                                
                          </View>

                  )}
                    />

            </View>

    )

}
export default HomeDecoration;