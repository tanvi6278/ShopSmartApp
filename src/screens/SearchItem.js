import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, TextInput, FlatList} from "react-native";

const SearchItem = ()=>
{
     const [product,setProduct] = useState([])
     const [searchQuery , setSearchQuery] = useState('');
     

     const fetchApi = async () =>
     {
        const response = await axios.get(`https://dummyjson.com/products?search=${searchQuery}`);
        const filterData = response.data.products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

        setProduct(filterData);
     }

     useEffect (()=>
     {
        if(searchQuery.length > 0)
        {
            fetchApi();
        }
        else{
               
            setProduct([])
        }
     },[searchQuery])

    return(

        <View style={{height:"100%",width:"100%",backgroundColor:"red",alignItems:"center"}}>
           <View style={{height:60,width:"80%",backgroundColor:"grey"}}>
              <TextInput placeholder="search"
              
              value={searchQuery}
              onChangeText={(text)=>setSearchQuery(text)}
               />
           
           </View>

          <FlatList
           data={product}
           keyExtractor={(item) => item.id.toString()}
            renderItem={ ({item}) => (
                <View>
                     <Text>
                        {item.title}
                     </Text>
                </View>
            ) }
           />

        </View>
    )

}
export default SearchItem;