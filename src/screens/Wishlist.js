import React, { useEffect, useState } from "react";
import { Text, View,Image, ActivityIndicatorComponent, FlatList, ScrollView } from "react-native";
import axios from "axios";

const Wishlist = ()=>
{

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect( ()=>
  {
      const fetchData = async () =>
      {
        try{
             const response = await axios.get('https://fakestoreapi.com/products')   
             setData(response.data)
             setLoading(false);           
        } 
        catch(error)
        {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      }
      fetchData();
  },[])


  return(
    <ScrollView>
    <View>
        { loading ? (
          <Text>
               Loading....
          </Text>
        ) : 
          (
            <View>

            {
              data.map(user => (

                <View key={user.id} style={{ alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:'#000'}}>
                
                   <Text style={{color:"#000"}}>
                       {user.title}
                   </Text>
                   <Image style={{width:30,height:30}} source={{uri: user.image}}/>
                   <Text style={{color:"#000"}}>
                       {user.price}
                   </Text>

                </View>
              ))}
            </View>
         )}
    </View>  
    </ScrollView>       
  )
}
export default Wishlist;
