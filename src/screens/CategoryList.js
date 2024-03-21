import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"

const CategoryList = ()=> {
   
  




    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#fff'
        }} >
        <ScrollView>
        <CategoryComponents name="SmartPhone"/>
        
           <CategoryComponents name="Laptops"/>
           
           <CategoryComponents  name="Fragrances"/>
           <CategoryComponents   name="Skincare"/>
           <CategoryComponents   name="Groceries"/>
           <CategoryComponents  name="Home-Decoration"/>
           <CategoryComponents name="Furniture"/>
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
