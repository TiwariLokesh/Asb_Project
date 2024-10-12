import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the import based on the icon library you're using

const App = () => {
  const [activeTab, setActiveTab] = React.useState('Overview');

  const InvestmentSummary = () => (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Investment Summary</Text>
      {/* Add other details as per design */}
      <Text>Investment Value (₹): 20,000</Text>
      <Text>Current Value (₹): 21,000</Text>
      <Text>Net Worth (₹): 21,000</Text>
      <Text>Day G/L (₹): -282 (1.38%)</Text>
      <Text>Overall G/L (%): +1,000 (3.95%)</Text>
      {/* Add more fields as necessary */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Portfolio</Text>
        <Icon name="ellipsis-vertical" size={24} color="black" />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Overview')} style={activeTab === 'Overview' ? styles.activeTab : styles.tab}>
          <Text>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Basket Order')} style={activeTab === 'Basket Order' ? styles.activeTab : styles.tab}>
          <Text>Basket Order</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {activeTab === 'Overview' && <InvestmentSummary />}
        {/* Add Basket Order content here when the tab is active */}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="black" />
        <Icon name="analytics" size={24} color="black" />
        <Icon name="wallet" size={24} color="black" />
        <Icon name="settings" size={24} color="black" />
        <Icon name="person" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
    // Style your investment summary container here
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default App;
