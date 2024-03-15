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
                               
                               <Text>
                                    {item.price}
                               </Text>
                              

                                
                          </View>

                  )}
                    />

            </View>

    )

}
export default HomeDecoration;