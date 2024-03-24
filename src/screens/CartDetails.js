import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"

const CartDetails = () =>
{
    return(
          
          <View style={{height:"100%",width:"100%"}}>
          <ScrollView>
            <View style={{height:110,width:"100%",marginTop:5,
            justifyContent:"space-between",paddingHorizontal:10,
            backgroundColor:"#fff",flexDirection:'row',alignItems:'center'}}>
              <Image style={{height:75,width:60}} source={require('../icons/iphone.jpeg')} />
             
              <View style={{height:80,justifyContent:"space-between"}}>
                 
                <Text style={{fontSize:10,color:"#000"}}>
                 Iphone description
                </Text>
                <Text style={{fontSize:10,color:"#000"}}>
                     CERAMEL_QUEST
                 </Text>
                <View style={{ width:260,alignItems:"center",
                 justifyContent:"space-between",alignItems:"center",
                flexDirection:"row"}}>
                <View style={{height:30,width:70,justifyContent:"space-between",flexDirection:"row",alignItems:"center",
              }}>
                 <Text style={{fontSize:10,color:"#000"}}>
                      ₹2332 
                      </Text>
                      <Text style={{fontSize:10,color:"#000"}}>
                          ₹3542
                     
                         </Text>                    

                 </View>
                 <View style={{ height:30,width:70,alignItems:"center",paddingHorizontal:3,
                  justifyContent:"space-between",borderWidth:0.5,borderRadius:5, borderColor:"#e6e6e6",
                 flexDirection:"row"}}>
                       <Pressable>
                           <Text style={{fontSize:28,color:"#000"}}>
                              -
                           </Text>
                       </Pressable>
                       <Pressable>
                         <Text style={{fontSize:13,color:"#000"}} >
                            Qty
                         </Text>
                       </Pressable>
                       <Pressable>
                         <Text style={{fontSize:22,color:"#000"}}>
                            +
                         </Text>
                       </Pressable>
                 </View>
           
                </View>
              </View>
              
           </View>
           {/* ---------------------------- */}

                <View style={{height:250,marginTop:230,paddingHorizontal:20,
                width:"100%",backgroundColor:"#fff"}}>
                     <Text style={{fontSize:13,fontWeight:'500',marginTop:8,
                     color:"#000"}}>
                         Order Summary
                     </Text>
                  
                     <View style={{ height:50,width:"100%",borderBottomWidth:0.4,borderBottomColor:"#e6e6e6",
                     flexDirection:"row",alignItems:"center",
                     justifyContent:"space-between",
                      backgroundColor:"#fff",}}>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                             MRP
                          </Text>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                            ₹3,334
                          </Text>
                     </View>
                     <View style={{ height:50,width:"100%",flexDirection:"row",borderBottomWidth:0.4,borderBottomColor:"#e6e6e6",
                     alignItems:"center",
                     justifyContent:"space-between",
                     backgroundColor:"#fff",}}>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                             Discount on MRP
                          </Text>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                           - ₹ 3,334
                          </Text>
                     </View>
                     <View style={{ height:50,width:"100%",flexDirection:"row",
                     borderBottomWidth:0.4,borderBottomColor:"#e6e6e6",alignItems:"center",
                     justifyContent:"space-between",
                     backgroundColor:"#fff",}}>
                          <Text style={{fontSize:12,
                     color:"#000"}} >
                             Glamm Club Membership
                          </Text>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                            FREE
                          </Text>
                     </View>
                     <View style={{ height:50,width:"100%",flexDirection:"row",borderBottomWidth:0.4,borderBottomColor:"#e6e6e6",
                     alignItems:"center",
                     justifyContent:"space-between",
                     backgroundColor:"#fff",}}>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                             Shipping Charges
                          </Text>
                          <Text style={{fontSize:12,
                     color:"#000"}}>
                            Calculate on next step
                          </Text>
                     </View>

                     
                </View>
                
                </ScrollView>  
           
                <View style={{height:70,width:"100%",marginTop:7,
                flexDirection:"row",
                alignItems:"center",paddingHorizontal:10,
                justifyContent:"space-between",
                backgroundColor:"#fff"}}>
                <View>
                <Text style={{fontSize:12,color:"#000"}}>
                     Total Payment       
                 </Text>
                 <Text style={{fontSize:20,color:"#000",fontWeight:'700'}}>
                    ₹ 2,243
                 </Text>
                </View>
                 <View>
                 <Pressable style={{height:41,width:180,justifyContent:"space-between",paddingHorizontal:20,
                 alignItems:"center",borderRadius:5,flexDirection:"row",
                  backgroundColor:"red"}}>
                       <Text style={{color:"#fff",fontWeight:'600',
                       fontSize:15}}>
                          PLACE ORDER
                       </Text>
                       <Image style={{height:10,width:10}} source={require('../icons/arrowright.png')} />
                  </Pressable>
                 </View>
                    
                </View>



          </View>
    )
     
}
export default CartDetails;