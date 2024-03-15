import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import CategoryComponents from "../components/CategoryComponent";

const CategoryList = ()=>
{
    return(
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#fff'
        }} >
        <ScrollView>
        <CategoryComponents name="Computer and Office"/>
        
           <CategoryComponents name="Apparel Accessories"/>
           
           <CategoryComponents name="Consumer Electronics"/>
           <CategoryComponents name="Electronics Computers"/>
           <CategoryComponents name="Home & Garden"/>
           <CategoryComponents name="Home Appliances"/>
           <CategoryComponents name="Home Improvement"/>
           <CategoryComponents name="Lights & Lighting"/>
           <CategoryComponents name="Luggage & Bags"/>
           <CategoryComponents name="Shoes"/>
           <CategoryComponents name="Womens Clothing"/>
           <CategoryComponents name="Office & School Supplies"/>
           <CategoryComponents name="Security & Protection"/>
           <CategoryComponents name="Sports & Entertainment"/>
           <CategoryComponents name="Toys & Hobbies"/>
           <CategoryComponents name="Watches"/>
           </ScrollView>
           </View>
    )

}
export default CategoryList;
