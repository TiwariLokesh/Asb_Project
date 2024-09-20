import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MissedGoal = () => {
  return (
    <View style={styles.missedGoalContainer}>
      <Text style={styles.missedGoalText}>Goal is Missed</Text>
    </View>
  );
};


const MadeGoal = () => {
  return (
    <View style={styles.madeGoalContainer}>
      <Text style={styles.madeGoalText}>Goal is Done</Text>
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
  missedGoalContainer: {
    backgroundColor: '#ffe6e6',  
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red'
  },
  missedGoalText: {
    color: 'red',  
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  madeGoalContainer: {
    backgroundColor: '#e6ffe6', 
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green'
  },
  madeGoalText: {
    color: 'green', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Goal;
