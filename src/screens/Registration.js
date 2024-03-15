import React from "react";
import {View, Text, Pressable} from 'react-native'
import TextField from "../components/TextField";


const Registration = ()=> {
    return(
        <View style={{
            height:'100%',width:'100%',alignItems:'center'
        }}>
            <View style={{
                width:'100%'
            }}>
            <TextField name='First name'/>
            <TextField name='Last name'/>
            <TextField name='Email Address'/>
            <TextField name='Phone No'/>
            <TextField name='Password'/> 
            </View>
          
            <Pressable style={{height:60,width:"60%",
                backgroundColor:"red",marginTop:25,alignItems:"center",justifyContent:"center",
               borderRadius:30}}>
                     <Text style={{fontSize:17,fontWeight:'600',color:"#fff"}}>
                          Sign Up
                     </Text>
             </Pressable>
           
        </View>
        
    )
}
export default Registration