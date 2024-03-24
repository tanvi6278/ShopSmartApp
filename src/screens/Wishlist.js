import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"

const Wishlist = () =>
{
      const [wishlist,setWishlist] = useState([])  
      const [smartphone,setSmartphone] = useState([])


      const categoryApi = async () =>
      {
         const response = await axios.get('https://dummyjson.com/products/categories')
         setWishlist(response.data)
      }

      const smartphoneApi = async () =>
      {
            const response = await axios.get('https://dummyjson.com/products/category/smartphones')
            setSmartphone(response.data.products)
            console.log("fetching data",response.data.products)

      }

   useEffect( ()=>
   {
      categoryApi();
      

   },[])



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
      


                <View style={{width:"100%", height:"100%", backgroundColor:"green",flexDirection:"row"}}>
                  <View style={{height:"100%", width:"25%",backgroundColor:"#f8f8f8",alignItems:"center"}}>
                  <ScrollView>
                      {
                        wishlist.map((romika,index)=>
                        (
                           <Pressable onPress={smartphoneApi()}
                           key={index}
                           style={{height:70,width:"100%",alignItems:"center",
                       justifyContent:"center",borderBottomWidth:0.3,borderColor:"grey",
                       }}>
                     
                       <Text style={{fontSize:10,color:"grey"}}>
                           {romika}
                       </Text>
                       </Pressable>

                        ))
                      }
                      
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
                               {
                                 smartphone.map(({item})=>
                                 (
                                    <View key={item.id} style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                               <Pressable    style={{alignItems:"center"}}>
                                   
                                      <Text style={{fontSize:11,color:"#000"}}>
                                         {item.price}                                      </Text>     
                                </Pressable>
                               </View>

                                 ))

                               }
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