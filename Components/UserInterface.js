import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const StudentTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { name: "John Doe", physics: 80, chemistry: 75, math: 90, totalMarks: 245 },
    { name: "Jane Smith", physics: 85, chemistry: 80, math: 88, totalMarks: 253 },
    { name: "Sam Johnson", physics: 70, chemistry: 60, math: 75, totalMarks: 205 },
    { name: "Lucy Brown", physics: 95, chemistry: 89, math: 92, totalMarks: 276 },
    { name: "Mike Davis", physics: 60, chemistry: 55, math: 65, totalMarks: 180 },
  ];

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedStudent(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marks in PCM (out of 100)</Text>
      {students.map((student, index) => (
        <View key={index} style={styles.row}>
          <Text>{index + 1}</Text>
          <Text>{student.name}</Text>
          <Text>Physics: {student.physics}, Chemistry: {student.chemistry}, Math: {student.math}</Text>
          <TouchableOpacity onPress={() => openModal(student)}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          {selectedStudent && (
            <>
              <Text style={styles.modalTitle}>Student Details</Text>
              <Text>Name: {selectedStudent.name}</Text>
              <Text>Total Marks: {selectedStudent.totalMarks}</Text>
              <Text>Percentage: {(selectedStudent.totalMarks / 300 * 100).toFixed(2)}%</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  plusIcon: {
    fontSize: 20,
    color: 'blue',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});

export default StudentTable;
