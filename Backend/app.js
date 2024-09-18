const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'test';
const collectionName = 'users';

// Fetch all user data API
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

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
