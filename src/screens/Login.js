import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const Login = () =>{

    return(
      <View style={{height:"100%",width:"100%",alignItems:"center"}}>
             
                 <Image style={{
                    height:83,
                    width:130,
                    marginTop:80
                 }}  source={require('../icons/logo.png')}/>

           
              <View style={{
                width:'100%',
                paddingHorizontal:20,marginTop:20,
                alignItems:'center'
                }}>
              <View style={{
                  width:'100%',marginTop:8
              }}>
              <Text style={{
                  fontSize:16,color:"#000"
              }}>
                    Email or phone number 
              </Text>
              <TextInput style={{height:60,width:"100%",borderRadius:30,borderWidth:0.5,
               paddingHorizontal:10, borderColor:"grey",marginTop:5}}
              placeholder="type here"
                  placeholderTextColor="#000"
              />
              </View>

              <View style={{
                  width:'100%',marginTop:10,
              }}>
              <Text style={{
                  fontSize:17,color:"#000"
              }}>
                    Password
              </Text>
              <TextInput style={{height:60,width:"100%",borderRadius:30,
              paddingHorizontal:10, borderWidth:0.5,borderColor:"grey",marginTop:5}}
              placeholder="type here"
              placeholderTextColor="#000"
              
              />
              </View>

              <Pressable style={{height:60,width:"100%",
                backgroundColor:"red",marginTop:25,alignItems:"center",justifyContent:"center",
               borderRadius:30}}>
                     <Text style={{fontSize:17,fontWeight:'600',color:"#fff"}}>
                          Sign in 
                     </Text>
             </Pressable>
             <Pressable style={{height:60,width:"100%",
                backgroundColor:"#e5e5e5",marginTop:20,alignItems:"center",justifyContent:"center",
               borderRadius:30}}>
                     <Text style={{fontSize:17,fontWeight:'600',color:"#000"}}>
                     Sign in with OTP
                     </Text>
             </Pressable>
             <Pressable style={{height:50,width:"90%",alignItems:"center",justifyContent:"center",marginVertical:10}}>
                     <Text style={{fontSize:15,fontWeight:'400',color:"#000"}}>
                     Forgot password?
                     </Text>
             </Pressable>
            
                     
              </View>
                  
         
              <View style={{
                        flexDirection:'row',alignItems:'center',borderTopColor:"#000",borderTopWidth:1,width:'100%',
                        justifyContent:"center",paddingVertical:10
                     }}>
                     <Text style={{fontSize:15,fontWeight:'400',color:"#000"}}>
                           Don't have an account ? 
                           
                     </Text>
                     <Pressable>
                     <Text style={{fontSize:13,color:"#000",fontWeight:'600'}} >
                          Sign Up
                     </Text>
             </Pressable>
                     </View>
        

      </View>

    )

}
export default Login;
