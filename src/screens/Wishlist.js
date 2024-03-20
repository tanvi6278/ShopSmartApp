import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"

const Wishlist = () =>
{
  return(
          <View style={{height:"100%",width:"100%",alignItems:"center"}}>
              <View style={{height:50,width:"100%", backgroundColor:"red", flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15,
              alignItems:"center",
            }}>
                 <View style={{height:30,width:"40%",
                  }}>
                 <Text style={{color:"#000",fontSize:20}}>
                        All Categories
                  </Text>
                 </View>
                 <View style={{width:65,height:30,alignItems:"center",
                 flexDirection:"row",justifyContent:"space-between"}}>
                  <Image style={{height:17,width:17}} source={require('../icons/search.png')} />
                  <Image style={{height:20,width:20}}  source={require('../icons/microphone.jpg')} />
                 </View>
              </View>
        {/* ------------------------------------------------------- */}


                <View style={{width:"100%", height:"100%", backgroundColor:"green",flexDirection:"row"}}>
                  <View style={{height:"100%", width:"25%",backgroundColor:"#f8f8f8",alignItems:"center"}}>
                  <ScrollView>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           SmartPhones
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Laptops
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Fragrances
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Skincare
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Groceries
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Home - Decoration
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Furniture
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Tops
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Women-Dresses
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Women-Shoes
                       </Text>
                       </Pressable>
                       
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Mens- Shirt

                       </Text>
                       </Pressable>
                       
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Mens - Shoes
                       </Text>
                       </Pressable>
                       
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Men - Watches
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Women - Watches
                       </Text>
                       </Pressable>
                       
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Women - Bags
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Women-Jewellery
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Sunglasses
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Automotive
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Motorcycle
                       </Text>
                       </Pressable>
                       <Pressable style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                       <Image style={{height:30,width:30}} source={require('../icons/jawellerydesc.jpg')} />
                       <Text style={{fontSize:10,color:"grey"}}>
                           Lighting
                       </Text>
                       </Pressable>

                  </ScrollView>
                      
                  </View>
                   <View style={{height:"100%", width:"75%",backgroundColor:"grey"}}>

                      <ScrollView >
                            <Pressable>
                                <Image style={{height:100,width:"100%"}} source={require('../icons/galaxy.jpg')} />
                            </Pressable>


                      {/* ------------------- */}

                           <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                    Mens Clothing
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>

                          {/* ----------------------------------------- */}
                         
                         
                          <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                    Men's Footwear & Accessories
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>

                          {/* ---------------------------- */}


                          <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                    Women Clothing
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>

                          {/* --------------------------------------- */}
                                        
                          <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                Women's Footwear & Accessories
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>            
                           {/* ------------------------------------- */}

                           <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                    Suitcase , Bags & Backpacks
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>

                          {/* --------------------------------------- */}

                          <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                  Kids Fashion
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>

                          {/* ------------------------------------------------- */}


                          <View style={{height:310,width:"100%",backgroundColor:"#fff",paddingHorizontal:15}}>
                                <Text style={{fontSize:13,color:"#000",marginTop:10,fontWeight:'500'}}>
                                    Flipcart Global Brands
                                </Text>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shoes.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/shirt.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Casual Shirt
                                      </Text>     
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{textAlign:"center",fontSize:11,color:"#000"}}>
                                         Round & Polo {'\n'}
                                         T-Shirt
                                      </Text> 
                                </View>
                                <View style={{alignItems:"center"}}>
                                <Image style={{height:60,width:60,borderRadius:150}} source={require('../icons/letherbagss.jpg')} />
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         Jeans & Trousers
                                      </Text> 
                                </View>
                               </View>
                               <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <View style={{alignItems:"center"}}>
                                    <Image style={{height:30,width:20,borderRadius:150}} source={require('../icons/arrow.png')} />
                                      <Text style={{fontSize:12,color:"#000"}}>
                                         View All
                                      </Text>     
                                </View>  
                               </View>
                          </View>


                      </ScrollView>
                      

                  </View>
                    
                </View>
              
          </View>

  )

}
export default Wishlist;