// // App.js (React Native Frontend)
// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, Text, View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true); // To show a loading indicator

//   useEffect(() => {
//     // Fetch users from the backend API
//     axios
//       .get('http://192.168.0.15:3000/users') // Replace with your machine's IP address
//       .then((response) => {
//         setUsers(response.data);
//         setLoading(false); // Stop loading once data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//         setLoading(false); // Stop loading even if there is an error
//       });
//   }, []);

//   // Render a single user item
//   const renderItem = ({ item }) => (
//     <View style={styles.userItem}>
//       <Text style={styles.text}>Name: {item.name}</Text>
//       <Text style={styles.text}>Email: {item.email}</Text>
//       <Text style={styles.text}>Age: {item.age}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>User List</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" /> // Show a loading indicator
//       ) : (
//         <FlatList
//           data={users}
//           keyExtractor={(item) => item._id}
//           renderItem={renderItem}
//           ListEmptyComponent={<Text>No users available</Text>}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   userItem: {
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default App;









// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import Goal from './Components/Goal';  // Import the Goal component

// const App = () => {
//   return (
//     <SafeAreaView>
      
//       <Goal isGoal={false} />
//       <Goal isGoal={true} />
//     </SafeAreaView>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CinemaRecords from './Components/Cinema';
import data from './Components/data.json'; // Import the smaller JSON data

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(data); // Initialize with the data from JSON
  }, []);

  // Fetch all records
  const getAllRecords = () => {
    setRecords(data);
  };

  // Filter IPL records
  const getIPLRecords = () => {
    const iplRecords = data.filter((item) => item.prog_name.includes('IPL'));
    setRecords(iplRecords);
  };

  // Fetch record with max views
  const getMaxViewRecord = () => {
    const maxViewRecord = data.reduce((max, item) => (item.views > max.views ? item : max), data[0]);
    setRecords([maxViewRecord]);
  };

  // Filter loss records where expenses are greater than income
  const getLossRecords = () => {
    const lossRecords = data.filter((item) => item.expenses > item.income_of_ad);
    setRecords(lossRecords);
  };

  // Add a new record
  const addNewRecord = () => {
    const newRecord = {
      id: records.length + 1,
      views: 150000,
      prog_name: 'New Program',
      date_telecast: '2024-05-01',
      income_of_ad: 75000,
      expenses: 40000,
    };
    setRecords([...records, newRecord]);
  };

  // Delete the 3rd record
  const deleteThirdRecord = () => {
    const updatedRecords = records.filter((_, index) => index !== 2);
    setRecords(updatedRecords);
  };

  // Update expenses by 10%
  const updateExpenses = () => {
    const updatedRecords = records.map((item) => ({
      ...item,
      expenses: item.expenses * 1.1,
    }));
    setRecords(updatedRecords);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cinema Records Dashboard</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={getAllRecords}>
          <Text style={styles.buttonText}>All Records</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getIPLRecords}>
          <Text style={styles.buttonText}>IPL Records</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getMaxViewRecord}>
          <Text style={styles.buttonText}>Max View Record</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={getLossRecords}>
          <Text style={styles.buttonText}>Loss Records</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={addNewRecord}>
          <Text style={styles.buttonText}>Add New Record</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={deleteThirdRecord}>
          <Text style={styles.buttonText}>Delete 3rd Record</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={updateExpenses}>
          <Text style={styles.buttonText}>Update Expenses by 10%</Text>
        </TouchableOpacity>
      </View>

      <CinemaRecords records={records} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
    fontFamily: 'Arial',
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b79a1', 
    backgroundImage: 'linear-gradient(to right, #283e51, #4b79a1)',
    padding: 12,
    borderRadius: 15,
    marginVertical: 8,
    width: '85%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  buttonText: {
    color: '#ecf0f1',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
  },
});

export default App;
