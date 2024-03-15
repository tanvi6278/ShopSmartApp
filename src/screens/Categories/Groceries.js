import React, { useState } from "react";
import { FlatList, View,Image,Text} from "react-native"
import { useSelector } from "react-redux";

const Groceries = () =>
{
  const [column ,setColumn] = useState(2)
    const groceriesDes = useSelector((state) => state.groceries. groceriesItem )
    return(
        <View>
              <FlatList 
              key={column}
              data={groceriesDes}
              keyExtractor={(item) => item.id.toString()}
              numColumns={column}
              renderItem={({item}) =>(
                <View style={{paddingHorizontal:10}}>
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
        </View>
                     )
              }
               />

        </View>
    )

}
export default Groceries;