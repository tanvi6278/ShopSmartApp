import React,{useState,useEffect} from "react";
import { View,Text, Image, Pressable, ScrollView, FlatList, StyleSheet, RefreshControl } from "react-native"



const Home = ()=>
{ 

  
 return(
    <View style={{width:"100%",height:"100%"}}>
      <View>
          <Image style={{height:200,width:"100%"}} source={require('../icons/galaxy.jpg')}/>
      </View>
      
        <View style={{marginTop:10}}>
        <Text style={{fontSize:17,fontWeight:"500",color:"#000"}}>
             Categories
        </Text>
        <View>  
        <ScrollView horizontal>
               
          
                         
                        <Pressable 
         style={{height:80,width:160,alignItems:"center",marginTop:10,paddingHorizontal:5,
        backgroundColor:"red",justifyContent:"center", borderRadius:10}}>
            <Text style={{color:"#fff",fontWeight:"700",fontSize:17,textAlign:'center'}} >
              sample data
            </Text>
        </Pressable>
                      

               
     

        </ScrollView>
               

        </View>
        
        </View>
       
        
        




        {/* FlatList */}

       

      

     
    </View>
 )
}
export default Home;



const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    backgroundColor: '#fff',
    height:'100%',
    width:'100%'
  },
  modalContainer: {
    
   justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:'100%'
    
    
  },
  modalContent: {
    backgroundColor: 'white',
    
    borderRadius: 10,
    alignItems: 'center',
    width:'100%',
    height:"90%",
  
   
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
