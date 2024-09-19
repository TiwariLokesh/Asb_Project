const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'crud';
const collectionName = 'users';


app.use(bodyParser.json());


app.get('/users', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const users = await collection.find({}).toArray();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error in connection or fetching', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    } finally {
        await client.close();
    }
});

// Add 
app.post('/users', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const newUser = req.body; // Expecting user data in the request body
        const result = await collection.insertOne(newUser);

        res.status(201).json({ message: 'User added successfully', userId: result.insertedId });
    } catch (error) {
        console.error('Error adding user', error);
        res.status(500).json({ error: 'Failed to add user' });
    } finally {
        await client.close();
    }
});

// Update
app.put('/users/:id', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const userId = req.params.id;
        const updatedUser = req.body;

        const result = await collection.updateOne(
            { _id: new ObjectId(userId) },
            { $set: updatedUser }
        );

        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({ error: 'Failed to update user' });
    } finally {
        await client.close();
    }
});

// Delete 
app.delete('/users/:id', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const userId = req.params.id;
        const result = await collection.deleteOne({ _id: new ObjectId(userId) });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user', error);
        res.status(500).json({ error: 'Failed to delete user' });
    } finally {
        await client.close();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
