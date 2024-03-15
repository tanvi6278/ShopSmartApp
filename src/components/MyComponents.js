import React from "react";
import { View } from "react-native"

const MyComponents = () =>
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.github.com/users ');
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

     return(
        <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>{JSON.stringify(data)}</Text>
        )}
      </View>
     )
}
export default MyComponents;
