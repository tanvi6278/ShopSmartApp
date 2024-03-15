import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';

const UpperView = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [count,setCount] = useState(1); 

  const Add = ()=>
  {
     console.log("add")
     setCount(count + 1);
  }


  return (

       <View style={{
          height:444,
          width:'100%',
          
       }}>
       <Pressable  onPress={ ()=> setModalVisible(true)}  style={{height:30,backgroundColor:"red"}}>
                           <Text style={{fontSize:17,fontWeight:'700',color:"#000"}}> 
                                 Select
                           </Text>
                       </Pressable>
          <Modal animationType='slide'
           visible={modalVisible} >
           <View style={{height:"91%",width:"100%",borderRadius:22,paddingHorizontal:10,
        borderColor:"grey",
           marginTop:70}}>
                <View style={{height:40,width:"98%",alignItems:"center",
                  flexDirection:"row", justifyContent:"space-between" }}>
                <Text style={{fontSize:15,color:"#000",fontWeight:"500"}}>
                     Product Option
                </Text>
                <Pressable onPress={()=> setModalVisible(false)}>
                     <Image style={{height:15,width:15}} source={require('../icons/close.png')} />
                </Pressable>  
                </View>   
                <View style={{marginTop:5,alignItems:"center"}}>
                   <Image style={{height:270,width:220}} source={require('../icons/vaccuum.jpeg')} />
                </View>
                <View style={{height:160,width:"100%",paddingHorizontal:10,
                 }}>
                   <Text style={{fontSize:17,color:"#000",fontWeight:"500"}}>
                       Oil Dispancer With Brush Oil Dispancer
                       {"\n"}
                       Silicon ,PP, sodium calcium glass Oil Brush...
                   </Text>
                   <View style={{height:40,flexDirection:"row",alignItems:"center",
                          justifyContent:"space-between",
                          width:207}}>
                       <Text style={{fontSize:20,color:"red",fontWeight:"800",marginTop:5}}>
                       ₹295.00 
                       </Text>
                       <Text style={{fontSize:13,color:"grey",fontWeight:"500"}}>
                            (Inclusive of all taxes)
                       </Text>
                   </View>
                  <View style={{height:35,justifyContent:"space-between",
                  marginTop:24,flexDirection:"row",
                          width:84}}>
                  <Text style={{fontSize:17,color:"#000",fontWeight:"500"}}>
                       Qty 
                  </Text>
                   <Text style={{fontSize:15,color:"red",fontWeight:"500"}}>
                       (10 left)
                       </Text>
                  </View>
                <View style={{flexDirection:"row",height:30,width:"45%",
                justifyContent:"space-between"}}>
                <Pressable 
                style={{height:30,width:30,borderRadius:4,alignItems:"center",
                  backgroundColor:"grey"}}>
                      <Text style={{fontSize:20}}>
                            -
                      </Text>
                </Pressable>
                <Text style={{fontSize:17,color:"#000"}}>
                     {count}
                </Text>
                <Pressable onPress={Add} 
                 style={{height:30,width:30,borderRadius:4,alignItems:"center",
                  backgroundColor:"grey"}}>
                      <Text style={{fontSize:20}}>
                            +
                      </Text>
                </Pressable>
                </View>
              
             <Pressable style={{height:45,width:"99%",marginTop:80,alignItems:"center",
             borderRadius:10,justifyContent:"center",
             backgroundColor:"red"}}>
                     <Text style={{fontSize:17,fontWeight:"600",color:"#000"}}>
                          Continue
                     </Text>
                </Pressable>
            
               </View>
               
                   
           </View>  
       </Modal>     
       </View>           
     )
  }
  export default UpperView;