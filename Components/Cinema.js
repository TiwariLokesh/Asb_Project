import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Cinema = ({ records }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text style={styles.text}>Program: {item.prog_name}</Text>
            <Text style={styles.text}>Views: {item.views}</Text>
            <Text style={styles.text}>Telecast Date: {item.date_telecast}</Text>
            <Text style={styles.text}>Ad Income: ${item.income_of_ad}</Text>
            <Text style={styles.text}>Expenses: ${item.expenses}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  record: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4dd0e1',
  },
  text: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 5,
  },
});

export default Cinema;
