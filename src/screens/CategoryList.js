import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import CategoryComponents from "../components/CategoryComponent";
import axios from "axios";
import { setFrangrances, setFurniture, setGroceries, setHomeDecoration, setLaptops, setSkincare, setSmartphone } from "../redux/Action";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CategoryList = ()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const fetchSmartphoneApi = async ()=>
  {
      try {
         const response = await axios.get('https://dummyjson.com/products/category/smartphones')
         dispatch(setSmartphone(response.data.products))
         navigation.navigate('JewelleryDesc')
         console.log("fetching",response.data.products)
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
  




    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#fff'
        }} >
        <ScrollView>
        <CategoryComponents onPress={fetchSmartphoneApi} name="SmartPhone"/>
        
           <CategoryComponents onPress={Laptops} name="Laptops"/>
           
           <CategoryComponents onPress={Fragrances} name="Fragrances"/>
           <CategoryComponents onPress={fetchSkincare}  name="Skincare"/>
           <CategoryComponents  onPress={GroceriesApi} name="Groceries"/>
           <CategoryComponents onPress={homeDecorationApi} name="Home-Decoration"/>
           <CategoryComponents onPress={furnitureApi} name="Furniture"/>
           <CategoryComponents name="Tops"/>
           <CategoryComponents name="Womens- Dresses"/>
           <CategoryComponents name="Womens-Shoes"/>
           <CategoryComponents name="Mens-Shirt"/>
           <CategoryComponents name="Mens-Watches"/>
           <CategoryComponents name="Womens-Watches"/>
           <CategoryComponents name="Womens-Bags"/>
           <CategoryComponents name="Womens-jewellery"/>
           <CategoryComponents name="Sunglasses"/>
           <CategoryComponents name="Automotive"/> 
           <CategoryComponents name="Lighting"/>

           </ScrollView>
           </View>
    )

}
export default CategoryList;
