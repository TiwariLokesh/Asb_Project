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

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import Cinema from './Components/Cinema';
// import data from './Components/data.json'; 

// const App = () => {
//   const [records, setRecords] = useState([]);


  
//   useEffect(() => {
//     setRecords(data); 
//   }, []);

 
//   const getAllRecords = () => {
//     setRecords(data);
//   };

//   const getIPLRecords = () => {
//     const iplRecords = data.filter((item) => item.prog_name.includes('IPL'));
//     setRecords(iplRecords);
//   };

  
//   const getMaxViewRecord = () => {
//     const maxViewRecord = data.reduce((max, item) => (item.views > max.views ? item : max), data[0]);
//     setRecords([maxViewRecord]);
//   };

 
//   const getLossRecords = () => {
//     const lossRecords = data.filter((item) => item.expenses > item.income_of_ad);
//     setRecords(lossRecords);
//   };


//   const addNewRecord = () => {
//     const newRecord = {
//       id: records.length + 1,
//       views: 150000,
//       prog_name: 'New Program',
//       date_telecast: '2024-05-01',
//       income_of_ad: 75000,
//       expenses: 40000,
//     };
//     setRecords([...records, newRecord]);
//   };


//   const deleteThirdRecord = () => {
//     const updatedRecords = records.filter((_, index) => index !== 2);
//     setRecords(updatedRecords);
//   };

 
//   const updateExpenses = () => {
//     const updatedRecords = records.map((item) => ({
//       ...item,
//       expenses: item.expenses * 1.1,
//     }));
//     setRecords(updatedRecords);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Cinema Records </Text>

//       <View style={styles.btnGroup}>
//         <TouchableOpacity style={styles.btn} onPress={getAllRecords}>
//           <Text style={styles.btnText}>All Records</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={getIPLRecords}>
//           <Text style={styles.btnText}>IPL Records</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={getMaxViewRecord}>
//           <Text style={styles.btnText}>Max View Record</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={getLossRecords}>
//           <Text style={styles.btnText}>Loss Records</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={addNewRecord}>
//           <Text style={styles.btnText}>Add New Record</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={deleteThirdRecord}>
//           <Text style={styles.btnText}>Delete 3rd Record</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btn} onPress={updateExpenses}>
//           <Text style={styles.btnText}>Update Expenses by 10%</Text>
//         </TouchableOpacity>
//       </View>

//       <Cinema records={records} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f4f7',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#2c3e50',
//     fontFamily: 'Arial',
//   },
//   btnGroup: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   btn: {
//     backgroundColor: '#4b79a1', 
//     backgroundImage: 'linear-gradient(to right, #283e51, #4b79a1)',
//     padding: 12,
//     borderRadius: 15,
//     marginVertical: 8,
//     width: '85%',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   },
//   btnText: {
//     color: '#ecf0f1',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//     fontFamily: 'Roboto',
//     textTransform: 'uppercase',
//   },
// });

// export default App;


import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ApiPractice from './Components/ApiPractice'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ApiPractice/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center'
    },
})

