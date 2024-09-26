import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const ApiPractice = () => {

    useEffect(() => {
        getProducts();
    }, []);
  

  const getProducts = () => {
    const URL = 'https://fakestoreapi.com/products/1';

    fetch(URL).then(res => {
       return res.json(); //convert it into readable format
    }).then(data => {
        console.log(data);
    })
  }
  return (
    <View>
      <Text>ApiPractice</Text>
    </View>
  )
}

export default ApiPractice

const styles = StyleSheet.create({})