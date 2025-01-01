import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from Node API
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log('Error fetching data', error);
            });
    }, []);

    return (
        
        <ScrollView style={styles.container}>
            
            {users.map((user, index) => (
                <View key={index} style={styles.userRow}>
                    <Text style={styles.userData}>Name: {user.name}</Text>
                    <Text style={styles.userData}>Email: {user.email}</Text>
                    <Text style={styles.userData}>Age: {user.age}</Text>
                    <Button title="Show" onPress={() => alert(`User: ${user.name}`)} />
                </View>
                
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    userRow: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    userData: {
        marginBottom: 10,
        fontSize: 16,
    }
});

export default UserList;
