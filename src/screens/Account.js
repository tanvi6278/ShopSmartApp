import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import MyProfile from "../components/MyProfile";
import MyOrders from "../components/MyOrders";

const Account = ()=>
{
 return(
<ScrollView>
    <View style={{height:"100%" ,width:"100%",alignItems:"center"}}>
    
         <View style={{height:110,width:110,backgroundColor:"#ececec",marginTop:10, borderRadius:100}}>           
         </View>
         <View style={{ marginTop:5,flexDirection:"row"}}  >
         <Text style={{fontSize:20,fontWeight:'700'}}>
              Xnation Ttttt 
         </Text>
         <Image style={{height:20,width:20}} source={require('../icons/edit.png')} />
      </View>
         <Text>
            radhekrishna@gmail.com
         </Text>
    
   
   <MyProfile name=" My Profile"  
      imageSource={require('../icons/myprofile.png')}
      imageSrc={require('../icons/greater.png')}
   />
    <MyProfile name="Manage Address"  
      imageSource={require('../icons/location.png')}
      imageSrc={require('../icons/greater.png')}
   />
   <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
   <MyOrders name="My Orders" 
    imageSource={require('../icons/myorders.png')} />

    <MyOrders name="Processing" 
    imageSource={require('../icons/myorders.png')} />
     
     </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
    <MyOrders name="Shipped" 
    imageSource={require('../icons/shipped.png')} />

    <MyOrders name="Dispute Orders" 
    imageSource={require('../icons/rating.png')} 
    textStyle={{
       width:"96%"}}
    />
    </View>

 <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
 <MyOrders name="Cancelled" 
    imageSource={require('../icons/cancelled.png')} />
 
 <MyOrders name="Feedback" 
    imageSource={require('../icons/feedback.png')} />

 </View>
 <MyProfile name="Coupon Code"  
      imageSource={require('../icons/coupon.png')}
      imageSrc={require('../icons/greater.png')}
      imageStyle={{
         width:25
      }}
      
   />
   <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
   <MyOrders name="Help" 
    imageSource={require('../icons/help.png')}
    textStyle={{
       width:"65%"
    }} />
 
 <MyOrders name="Privacy Policy" 
    imageSource={require('../icons/privacy.png')}
    imageStyle={{
         width:"96%",   
      }} 

      />
    
 </View>

 <MyProfile name="Logout"  
      imageSource={require('../icons/logout.png')}
      imageStyle={{
         width:25
      }}
      textStyle={{
         color:"red"
      }}

   
   />




    </View>
    
</ScrollView>
 )
}
export default Account;
