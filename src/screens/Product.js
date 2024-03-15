import React, { useState } from "react";
import{ Image, Pressable, ScrollView, Text, View }from "react-native";
import ProductPick from "../components/ProductPick";
import Replacement from "../components/Replacement";
import MOdal from '../components/Modal'
import UpperView from "../components/Modal";

const Product = ()=>{

     const [modalVisible, setModalVisible] = useState(false)

    return(
        <View style={{height:"100%",width:"100%",alignItems:"center"}}>
        <ScrollView>
            <View style={{height:350,width:"90%",borderRadius:10,alignItems:"center",justifyContent:"center",
            backgroundColor:"#fff",marginTop:20}}>
            <Image style={{height:320,width:230,borderWidth:1,borderColor:"#000"}} source={require('../icons/vaccuum.jpeg')} />
            </View>

            <View style={{marginLeft:10,paddingVertical:10,height:100}}>
            <ScrollView horizontal>
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            <ProductPick  />
            </ScrollView>
            </View>
            <View style={{backgroundColor:"#fff",width:"100%",
               height:"100%"}}>
                  <View style={{paddingHorizontal:13}}>
                  <Text style={{color:"#000",fontSize:15,fontWeight:'500', marginTop:15}}>Creative Projection Electronics Clock LED Digital
                   {"\n"} Clock Mini  Portable Projection Clock Mini Torch
                   {"\n"} Projection Clock  </Text>
                   <Text style={{color:"grey",fontSize:11,marginTop:5}}>
                        Store: INFINITY WORKS
                   </Text>
                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <View style={{flexDirection:"row",justifyContent:"space-between",width:"53%",alignItems:"center"}}>
                  <Text style={{color:"#000",fontWeight:'500',fontSize:14}}>
                      MRP: ₹999.00 
                   </Text>
                   <Text style={{color:"grey",fontSize:12}}>
                           Save upto 67%
                      </Text> 
                  </View>
                  <Text style={{color:"grey",fontSize:13,textDecorationLine:"underline",textDecorationColor:"green"}}>
                        Get Coupon
                      </Text>   
                 </View>
               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
               <View >
                <View>
                    <Text style={{color:"grey",fontSize:15}}>
                         Price:
                         <Text style={{color:"#000",fontSize:14,fontWeight:'500'}}>
                         ₹120.00
                         </Text>
                        </Text>
                    <Text style={{color:"#000",fontSize:12,fontWeight:'600'}}>
                         (Exclusive of all taxes)
                    </Text>
                 </View>
                 <View>
                    <Text style={{color:"#000",fontSize:15,fontWeight:'600'}}>
                         ₹141.60
                         <Text style={{color:"grey",fontSize:14,fontWeight:'500'}}>
                         /Piece
                         </Text>
                        </Text>
                    <Text style={{color:"#000",fontSize:12,fontWeight:'600'}}>
                         (Inclusive of all taxes)
                    </Text>
                 </View>
                </View>
                 <View style={{flexDirection:"row",width:"19%",height:"70%",
                 alignItems:"center",
                 justifyContent:"space-between"}}>
                      <Image style={{height:23,width:23}} source={require('../icons/heart.png')} />
                      <Image style={{height:22,width:20}} source={require('../icons/share.png')}/>
                 </View>
               </View>
                  </View>
                  
                  <View style={{marginTop:40,
                     borderWidth:0.3,flexDirection:"row",alignItems:"center",justifyContent:"space-between",
                     borderColor:"grey",paddingVertical:20}}>
                  <ScrollView horizontal>
                 
                  <Replacement name="Replacement" days="7 Days" imageSource={require('../icons/search.png')}
                    textStyle={{
                         fontSize:15,color:"red",fontWeight:"500"
                    }}
                    textReplace={{
                         fontSize:13,color:"#000",fontWeight:"500"
                    }}

                    />
                  <Replacement name="Processing" days="1 Days" imageSource={require('../icons/processing.png')}
                  textStyle={{
                         fontSize:15,color:"#000",fontWeight:"500"
                    }}
                    textReplace={{
                         fontSize:13,color:"#000",fontWeight:"500"
                    }}

                  />
                  <Replacement name="Shipping" days="4 Days" imageSource={require('../icons/shipping.png')}
                    textStyle={{
                         fontSize:15,color:"#000",fontWeight:"500"
                    }}
                    textReplace={{
                         fontSize:13,color:"#000",fontWeight:"500"
                    }}
                  />
                
                  <Replacement name="Seller" days="Karnataka" imageSource={require('../icons/seller.png')}
                    textStyle={{
                         fontSize:15,color:"#000",fontWeight:"500"
                    }}
                    textReplace={{
                         fontSize:13,color:"#000",fontWeight:"500"
                    }}
                  />
                  <Replacement name="Warranty" days="No" imageSource={require('../icons/privacy.png')}

                     textStyle={{
                         fontSize:15,color:"#000",fontWeight:"500"
                    }}
                    textReplace={{
                         fontSize:13,color:"#000",fontWeight:"500"
                    }}
                  />
                  
                  </ScrollView>
                  </View>
                  <View style={{height:100,width:"100%",
                  alignItems:"center"}}>
                  <View style={{marginTop:15,flexDirection:"row",height:30,
                  width:"94%",
                  justifyContent:"space-between"}}>
                       <Text style={{fontSize:17,fontWeight:'700',color:"#000"}}>
                            Select Option & Shipping Method 
                       </Text>
                       <UpperView/>
                  </View>
                  </View>
                  
            </View>
            </ScrollView>
        </View>
    )
}
export default  Product;