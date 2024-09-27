import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApiPractice = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = 'https://fakestoreapi.com/products/';

    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        return res.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator color="red" size="large" />
      ) : error ? ( <Text>{error}</Text> ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <View>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text>{item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ApiPractice;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
