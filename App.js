// App.js (React Native Frontend)
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // To show a loading indicator

  useEffect(() => {
    // Fetch users from the backend API
    axios
      .get('http://192.168.0.15:3000/users') // Replace with your machine's IP address
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false); // Stop loading even if there is an error
      });
  }, []);

  // Render a single user item
  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Email: {item.email}</Text>
      <Text style={styles.text}>Age: {item.age}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Show a loading indicator
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          ListEmptyComponent={<Text>No users available</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
