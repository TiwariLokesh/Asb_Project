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


// import { SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'
// import ApiPractice from './Components/ApiPractice'

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ApiPractice/>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:"#fff",
//         alignItems:'center',
//         justifyContent:'center'
//     },
// })



// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the import based on the icon library you're using

// const App = () => {
//   const [activeTab, setActiveTab] = React.useState('Overview');
  

//   const InvestmentSummary = () => (
//     <ScrollView style={styles.summaryContainer}>
    
      
//       {/* Accordion Section */}
//       <TouchableOpacity style={styles.accordionHeader}>
//         <Text style={styles.accordionTitle}>All</Text>
//         <Icon name=  "chevron-down" size={24} color="#fff" />
//       </TouchableOpacity>
      
      
//         <View style={styles.accordionContent}>
//         <Text style={styles.summaryTitle}>Investment Summary</Text>
//           <View style={styles.row}>
//             <Text style={styles.label}>Investment Value (₹):</Text>
//             <Text style={styles.value}>20,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Current Value (₹):</Text>
//             <Text style={styles.value}>21,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Net Worth (₹):</Text>
//             <Text style={styles.value}>21,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Day G/L (₹):</Text>
//             <Text style={{color:"green"}}>-282 (1.38%)</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Overall G/L (₹):</Text>
//             <Text style={{color:"red"}}>+1,000 (3.95%)</Text>
//           </View>
//         </View>


// {/* Row2 */}
// <View style={styles.row2}>
//           <View style={styles.row}>
//             <Text style={styles.label}>Booked Gain/Loss</Text>
//             <Text style={styles.value}>2023-2024</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Released Gain/Loss</Text>
//             <Text style={styles.value}>-20,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Short Term G/L</Text>
//             <Text style={{color:"blue"}}>-20,000(-0.20%)</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Long Term G/L</Text>
//             <Text style={styles.value}>0(0.00%)</Text>
//           </View>
//           </View>



// {/* Row3 */}
// <View style={styles.row2}>
//           <View style={styles.row}>
//             <Text style={styles.label}>Basket Name</Text>
//             <Text style={styles.value}>BTC First Choice</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Investment Value (₹)</Text>
//             <Text style={styles.value}>25,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Unit</Text>
//             <Text style={{color:"blue"}}>3</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Current Value (₹)</Text>
//             <Text style={styles.value}>50,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Overall G/L</Text>
//             <Text style={styles.value}>+100%</Text>
//           </View>
//           </View>

// <View style={styles.counter}>
//   <Text style={styles.counterPlusIcon}>-</Text>
//   <Text style={{color:'white'}}>5</Text>
//   <Text style={styles.counterMinusIcon}>+</Text>
// </View>


// <TouchableOpacity style={styles.sellBtn}>
//   <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Sell</Text>
// </TouchableOpacity>
      

// {/* Last section */}
// <View style={styles.row2}>
//           <View style={styles.row}>
//             <Text style={styles.label}>Basket Name</Text>
//             <Text style={styles.value}>BTC First Choice</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Investment Value (₹)</Text>
//             <Text style={styles.value}>25,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Unit</Text>
//             <Text style={{color:"blue"}}>3</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Current Value (₹)</Text>
//             <Text style={styles.value}>50,000</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Overall G/L</Text>
//             <Text style={styles.value}>+100%</Text>
//           </View>
//           </View>


//     </ScrollView>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Portfolio</Text>
//         <Icon name="ellipsis-vertical" size={24} color="black" />
//       </View>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity onPress={() => setActiveTab('Overview')} style={activeTab === 'Overview' ? styles.activeTab : styles.tab}>
//           <Text style={{color:'white'}}>Overview</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab('Basket Order')} style={activeTab === 'Basket Order' ? styles.activeTab : styles.tab}>
//           <Text style={{color:'white'}}>Basket Order</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.contentContainer}>
//         {activeTab === 'Overview' && <InvestmentSummary />}
//         {/* Add Basket Order content here when the tab is active */}
//       </ScrollView>

//       <View style={styles.bottomNav}>
//         <Icon name="home" size={24} color="white" />
//         <Icon name="analytics" size={24} color="white" />
//         <Icon name="wallet" size={24} color="white" />
//         <Icon name="settings" size={24} color="white" />
//         <Icon name="person" size={24} color="blue" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color:'#fff',
//     textAlign:'center',
//     flex:1
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   tab: {
//     paddingVertical: 16,
//   },
//   activeTab: {
//     paddingVertical: 16,
//     borderBottomWidth: 2,
//     borderBottomColor: 'blue',
//   },
//   contentContainer: {
//     padding: 16,
//   },
//   summaryContainer: {
//     padding: 16,
//     borderRadius: 8,
//   },
//   summaryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color:'#fff'
//   },
//   accordionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal:12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: -10,
//     borderRadius:10,
//   },
//   accordionTitle: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   accordionContent: {
//     marginTop: 10,
//     backgroundColor:"#000",
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 5,
//   },
//   row2:{
// marginTop:25
//   },
//   label: {
//     color: '#fff',
//   },
//   value: {
//     color: '#fff',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   counterLabel: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   sellButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   counter:{
// borderWidth:1,
// borderColor:"white",
// marginTop:10,
// borderRadius:8,
// flex:1,
// justifyContent:'space-between',
// flexDirection:'row',
// padding:10
//   },
//   counterPlusIcon:{
//     borderWidth:1,
//     borderColor:"white",
//     color:'white',
//     fontSize:18,
//     paddingVertical:0,
//     paddingHorizontal:10,
//     borderRadius:8,
//   },
//   counterMinusIcon:{
//     borderWidth:1,
    
//     color:'black',
//     backgroundColor:'blue',
//     fontSize:18,
//     paddingVertical:0,
//     paddingHorizontal:10,
//     borderRadius:8,
//   },
//   sellBtn:{
//     backgroundColor:'cyan',
//     marginTop:20,
//     borderRadius:5,
//     paddingTop:10,
//     paddingBottom:10
   
//   }
// });

// export default App;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the import based on the icon library you're using

const App = () => {
  const [activeTab, setActiveTab] = React.useState('Overview');

  const InvestmentSummary = () => (
    <ScrollView style={styles.summaryContainer}>
      {/* Accordion Section */}
      <TouchableOpacity style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>All</Text>
        <Icon name="chevron-down" size={24} color="#fff" />
      </TouchableOpacity>
      
      <View style={styles.accordionContent}>
        <Text style={styles.summaryTitle}>Investment Summary</Text>
        {/* Investment Details */}
        <View style={styles.row}>
          <Text style={styles.label}>Investment Value (₹):</Text>
          <Text style={styles.value}>20,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Current Value (₹):</Text>
          <Text style={styles.value}>21,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Net Worth (₹):</Text>
          <Text style={styles.value}>21,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Day G/L (₹):</Text>
          <Text style={{color:"cyan"}}>-282 (1.38%)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Overall G/L (₹):</Text>
          <Text style={{color:"red"}}>+1,000 (3.95%)</Text>
        </View>
      </View>

      {/* Additional Rows */}
      <View style={styles.row2}>
        <View style={styles.row}>
          <Text style={styles.label}>Booked Gain/Loss</Text>
          <Text style={styles.value}>2023-2024</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Released Gain/Loss</Text>
          <Text style={styles.value}>-20,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Short Term G/L</Text>
          <Text style={{color:"blue"}}>-20,000(-0.20%)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Long Term G/L</Text>
          <Text style={styles.value}>0(0.00%)</Text>
        </View>
      </View>

      {/* Basket Details */}
      <View style={styles.row2}>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Name</Text>
          <Text style={styles.value}>BTC First Choice</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Investment Value (₹)</Text>
          <Text style={styles.value}>25,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Unit</Text>
          <Text style={{color:"blue"}}>3</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Current Value (₹)</Text>
          <Text style={styles.value}>50,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Overall G/L</Text>
          <Text style={styles.value}>+100%</Text>
        </View>
      </View>

      <View style={styles.counter}>
        <Text style={styles.counterPlusIcon}>-</Text>
        <Text style={{color:'white'}}>5</Text>
        <Text style={styles.counterMinusIcon}>+</Text>
      </View>

      <TouchableOpacity style={styles.sellBtn}>
        <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Sell</Text>
      </TouchableOpacity>



       {/* Basket Details */}
       <View style={styles.row2}>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Name</Text>
          <Text style={styles.value}>BTC First Choice</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Investment Value (₹)</Text>
          <Text style={styles.value}>25,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Unit</Text>
          <Text style={{color:"blue"}}>3</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Current Value (₹)</Text>
          <Text style={styles.value}>50,000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Overall G/L</Text>
          <Text style={styles.value}>+100%</Text>
        </View>
      </View>



    </ScrollView>
  );






  const BasketOrderSummary = () => (
    <ScrollView style={styles.summaryContainer}>
   
   <TouchableOpacity style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>All</Text>
        <Icon name="chevron-down" size={24} color="#fff" />
      </TouchableOpacity>

      {/* First */}
      <View style={styles.row2}>
        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>2023-08-04, 12:12:26</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Name</Text>
          <Text style={styles.value}>BTC First Choice</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Type</Text>
          <Text style={styles.value}>Spot Lifetime</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Side</Text>
          <Text style={styles.value}>Buy</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Unit</Text>
          <Text style={styles.value}>20</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Price Per Unit</Text>
          <Text style={styles.value}>₹200</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.value}>₹500</Text>
        </View>
      </View>


       {/* Second */}
       <View style={styles.row2}>
        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>2023-08-04, 12:12:26</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Name</Text>
          <Text style={styles.value}>BTC First Choice</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Type</Text>
          <Text style={styles.value}>Spot Enquiry</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Side</Text>
          <Text style={styles.value}>Sell</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Unit</Text>
          <Text style={styles.value}>20</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Price Per Unit</Text>
          <Text style={styles.value}>₹200</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.value}>₹500</Text>
        </View>
      </View>



 {/* Third */}
 <View style={styles.row2}>
  
        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>2023-08-04, 12:12:26</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Basket Name</Text>
          <Text style={styles.value}>BTC First Choice</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basket Type</Text>
          <Text style={styles.value}>Spot Lifetime</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Side</Text>
          <Text style={styles.value}>Perpetuals</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Unit</Text>
          <Text style={styles.value}>20</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Price Per Unit</Text>
          <Text style={styles.value}>₹200</Text>
        </View>
        
        
        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.value}>₹500</Text>
        </View>
      </View>
      

    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Portfolio</Text>
        <Icon name="person-circle-outline" size={34} color="blue" />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Overview')} style={activeTab === 'Overview' ? styles.activeTab : styles.tab}>
          <Text style={{color:'white'}}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Basket Order')} style={activeTab === 'Basket Order' ? styles.activeTab : styles.tab}>
          <Text style={{color:'white'}}>Basket Order</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {activeTab === 'Overview' && <InvestmentSummary />}
        {activeTab === 'Basket Order' && <BasketOrderSummary />}
      </ScrollView>

      <View style={styles.bottomNav}>
  <View style={styles.navItem}>
    <Icon name="basket-outline" size={24} color="white" />
    <Text style={styles.navText}>Basket</Text>
  </View>
  <View style={styles.navItem}>
    <Icon name="analytics" size={24} color="white" />
    <Text style={styles.navText}>Analytics</Text>
  </View>
  
  <View style={styles.navItem}>
    <Icon name="aperture-outline" size={24} color="white" />
    <Text style={styles.navText}>Orders</Text>
  </View>
  
  <View style={styles.navItem}>
    <Icon name="wallet" size={24} color="white" />
    <Text style={styles.navText}>Wallet</Text>
  </View>
  
  <View style={styles.navItem}>
    <Icon name="briefcase-outline" size={24} color="blue" />
    <Text style={{color:'blue'}}>Portfolio</Text>
  </View>
</View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#000',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'center',
        flex:1
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      tab: {
        paddingVertical: 16,
      },
      activeTab: {
        paddingVertical: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
      },
      contentContainer: {
        padding: 16,
      },
      summaryContainer: {
        padding: 16,
        borderRadius: 8,
      },
      summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
      },
      accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal:12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: -10,
        borderRadius:10,
      },
      accordionTitle: {
        fontSize: 16,
        color: '#fff',
      },
      accordionContent: {
        marginTop: 10,
        backgroundColor:"#000",
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
      },
      row2:{
    marginTop:25
      },
      label: {
        color: '#818589',
      },
      value: {
        color: '#fff',
      },
      counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
      },
      counterLabel: {
        fontSize: 24,
        color: '#fff',
      },
      sellButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
      },
      bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#000', // To match the overall theme
      },
      navItem: {
        alignItems: 'center',
      },
      navText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 4,
      },      
      counter:{
    borderWidth:1,
    borderColor:"white",
    marginTop:10,
    borderRadius:8,
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    padding:10
      },
      counterPlusIcon:{
        borderWidth:1,
        borderColor:"white",
        color:'white',
        fontSize:18,
        paddingVertical:0,
        paddingHorizontal:10,
        borderRadius:8,
      },
      counterMinusIcon:{
        borderWidth:1,
        
        color:'black',
        backgroundColor:'blue',
        fontSize:18,
        paddingVertical:0,
        paddingHorizontal:10,
        borderRadius:8,
      },
      sellBtn:{
        backgroundColor:'cyan',
        marginTop:20,
        borderRadius:5,
        paddingTop:10,
        paddingBottom:10
       
      }
});

export default App;
