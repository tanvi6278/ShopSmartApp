import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const Cart = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products?search=${searchQuery}`);
      const filteredProducts = response.data.products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  


  useEffect(() => {
    if(searchQuery.length > 0) {
        fetchProducts();
    } else {
        setProducts([])
    }
  },[searchQuery])

  return (
    <View style={{
       
        height:"100%",
        width:'100%',
        alignItems:'center'
    }}>
      <TextInput style={{
        borderWidth:1,
        borderColor:'#000',
        width:'70%',
        color:"#000"
      }}
        placeholder="Search for products..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
            <View>
        <FlatList
  data={products}
  keyExtractor={(item, index) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ color: '#000', fontSize: 20 }}>{item.title}</Text>
    </View>
  )}
  
/>
      </View>


    </View>
  );
};

export default Cart;
