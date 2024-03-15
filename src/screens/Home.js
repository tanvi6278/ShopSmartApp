import React,{useState,useEffect} from "react";
import { View,Text, Image, Pressable, ScrollView, FlatList, StyleSheet, RefreshControl } from "react-native"
import Category from "../components/Category";
import Collection from "../components/Collection";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {  useDispatch } from "react-redux";
import { setComputerApi, setFrangrances, setFurniture, setGroceries, setHomeDecoration, setLaptops, setSkincare, setTanviApi } from "../redux/Action";




const Home = ()=>
{ 

  const dispatch = useDispatch()
  
  const navigation = useNavigation();
  const [productItems, setProductItems] = useState([]);
  const [columns, setColumns] = useState(2)

  const fetchAllProducts = async () => {
     
    try {

      const response = await axios.get('https://dummyjson.com/products')
      setProductItems(response.data.products)
      
      
      
    } catch (error) {
       console.log('not fetching ')
      
    }
  }

  // const jewellerApiCall = async () => {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  //     dispatch({ type: 'SET_DATA', payload: response.data }); 
  //     console.log('data', response.data);
  //     navigation.navigate('JewelleryDesc', { jewel: response.data });
  //   } catch (error) {
  //     console.error('Error fetching jewelery products: ', error);
  //   } 
  // };
  

  

  const goToCategoryList =  ()=>
  {
    navigation.navigate('CategoryList')
  }


  const Tanvi = async ()=>
  {
      try {
         const response = await axios.get('https://fakestoreapi.com/products')
         dispatch(setComputerApi(response.data))
         navigation.navigate('JewelleryDesc')
         console.log("fetching",response.data)
      } catch (error) {
        console.error("not fetching api",error)
        
      }
  }

  const Laptops = async () =>
  {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/laptops')
        dispatch(setLaptops(response.data.products))
        navigation.navigate('Laptops')
        
      } catch (error) {
        console.log("not fetching data")
      }

  }

  const Fragrances = async () =>
  {
    try {

      const response  = await axios.get('https://dummyjson.com/products/category/fragrances')
      dispatch(setFrangrances(response.data.products))
      console.log('ddddd',response.data.products)
      navigation.navigate('Fragrances')

      
    } catch (error) {
       console.log("not data fetching",error)
    }
  }

  const fetchSkincare = async () =>
  {

     try {
         
         const response = await axios.get('https://dummyjson.com/products/category/skincare')
         dispatch(setSkincare(response.data.products))
         navigation.navigate('Skincare')
         console.log("fetch data",error)
      
     } catch(error) {

      console.log("not fetching data")
      
     }
  }

   const GroceriesApi = async () =>
   {
        try {
          const response = await axios.get('https://dummyjson.com/products/category/groceries') 
        dispatch(setGroceries(response.data.products))
        navigation.navigate('Groceries')
        console.log("fetching ")
          
        } catch (error) {
          console.log("not fetching")
          
        }
   }

   const homeDecorationApi = async () =>
   {
          try {

            const response = await axios.get('https://dummyjson.com/products/category/home-decoration')
            dispatch(setHomeDecoration(response.data.products))
          navigation.navigate('HomeDecoration')
            console.log("fetching data",response.data.products)
            
          } catch (error) {
                  console.log("not fetching")

          }

   }

   const furnitureApi = async () =>
   {
       try {

        const response = await axios.get('https://dummyjson.com/products/category/furniture')
        dispatch(setFurniture(response.data.products))
        navigation.navigate('Furniture')
        console.log('fetching data')
       } catch (error) {

        console.log('not fetching')
        
       }

   }
  
  useEffect(() => {
    fetchAllProducts()
  }, []);


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
         
        <Category onPress={Tanvi} name="Smart Phones"/>
        <Category onPress={Laptops} name="Laptops"/>
        <Category  onPress={Fragrances} name="Fragrances"/>
        <Category onPress={fetchSkincare} name="Skincare"/>
        <Category  onPress={GroceriesApi} name="Groceries"/>
        <Category onPress={homeDecorationApi} name="Home Decoration"/>
        <Category onPress={furnitureApi}  name="Furniture"/>
        
        <Category onPress={goToCategoryList} name="View All"/>
        </ScrollView>
        </View>
        
        </View>
       
        
        




        <FlatList
        numColumns={columns}
        data={productItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
            <Collection user={item} />
          
        )}   
      />
      

       {/* <FlatList 
        data={computer}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={ ({item}) =>(
          
        <View>
        <Text style={{
          color:'#000'
        }}>{item.title}</Text>
        <Text style={{
          color:'#000'
        }}>₹{item.price}</Text>
        <Image style={{height:30,width:30}} source={{uri:item.image}} />
        </View>
        )} /> */}

      

     
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
