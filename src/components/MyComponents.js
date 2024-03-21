import React from "react";
import { View } from "react-native"

const MyComponents = () =>
{

  
   

     return(
        <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>sample data</Text>
        )}
      </View>
     )
}
export default MyComponents;
