import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MissedGoal = () => {
  return (
    <View style={styles.missedContainer}>
      <Text style={styles.missedText}>Goal is Missed</Text>
    </View>
  );
};


const MadeGoal = () => {
  return (
    <View style={styles.madeContainer}>
      <Text style={styles.madeText}>Goal is Done</Text>
    </View>
  );
};


const Goal = (props) => {
  const { isGoal } = props;
  

  return (
    <View>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </View>
  );
};


const styles = StyleSheet.create({
  missedContainer: {
    backgroundColor: '#ffe6e6',  
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red'
  },
  missedText: {
    color: 'red',  
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  madeContainer: {
    backgroundColor: '#e6ffe6', 
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green'
  },
  madeText: {
    color: 'green', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Goal;
