import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';

const studentData = [
  {
    id: 1,
    name: "John Doe",
    marks: { physics: 80, chemistry: 75, math: 90 }
  },
  {
    id: 2,
    name: "Jane Smith",
    marks: { physics: 85, chemistry: 80, math: 88 }
  },
  {
    id: 3,
    name: "Sam Johnson",
    marks: { physics: 70, chemistry: 60, math: 75 }
  },
  {
    id: 4,
    name: "Lucy Brown",
    marks: { physics: 95, chemistry: 89, math: 92 }
  },
  {
    id: 5,
    name: "Mike Davis",
    marks: { physics: 60, chemistry: 55, math: 65 }
  }
];

const RowItem = ({ student, showModal }) => (
  <View style={styles.row}>
    <TouchableOpacity style={styles.plusButton} onPress={showModal}>
      <Text style={styles.plusText}>+</Text>
    </TouchableOpacity>
    <Text style={styles.nameColumn}>{student.name}</Text>
    <Text style={styles.marksColumn}>
      Physics: {student.marks.physics}, Chemistry: {student.marks.chemistry}, Math: {student.marks.math}
    </Text>
  </View>
);

export default function StudentApp() {
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetailsModal = (student) => {
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
    setCurrentStudent(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>S.No</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Marks in PCM (out of 100)</Text>
      </View>
      <FlatList
        data={studentData}
        renderItem={({ item }) => (
          <RowItem student={item} showModal={() => openDetailsModal(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {currentStudent && (
        <Modal
          visible={isModalOpen}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Details</Text>
              <Text style={styles.modalText}>Name: {currentStudent.name}</Text>
              <Text style={styles.modalText}>Physics: {currentStudent.marks.physics}</Text>
              <Text style={styles.modalText}>Chemistry: {currentStudent.marks.chemistry}</Text>
              <Text style={styles.modalText}>Math: {currentStudent.marks.math}</Text>
              <Pressable style={styles.closeButton} onPress={closeDetailsModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 16,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 8,
  },
  plusButton: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  plusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    padding: 4,
    borderRadius: 16,
    textAlign: 'center',
  },
  nameColumn: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  marksColumn: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 4,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#ff5c5c',
    borderRadius: 6,
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
