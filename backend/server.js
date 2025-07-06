import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import shopProduct from './shop.js';
import menProduct from './Men.js';
import menCollections from './Mencollections.js';
import Women from './Women.js';
import womenCollections from './Womencollections.js';
import Kids from './Kids.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

    res.status(200).json({ message: 'Every thing is okkk .... ' });

});

/** Create Shop Product api endpoint */
app.get('/api/shop/product', (req, res) => {

    res.status(200).json(shopProduct);

});

/** create Men Product api endpoint */
app.get('/api/men/product', (req, res) => {

    res.status(200).json(menProduct);

});

/** Create Men Product Collection api endpoint */
app.get('/api/men/collections/product', (req, res) => {

    try {
        
        res.status(200).json(menCollections);

    } catch (error) {
        
        res.status(400).json({ error: error });

    }

});

/** Create Women Home Product Collection API Endpoint */

app.get('/api/women/product', (req, res) => {

    try {
        
        res.status(200).json(Women);

    } catch (error) {
        
        res.status(400).json({ error: error });

    }

});

/** Create Women Product Collection API Endpoint */

app.get('/api/women/collections/product', (req, res) => {

    try {

        res.status(200).json(womenCollections);

    } catch (error) {
        
        res.status(400).json({ error: error });

    }

});

/** Create Kids Home Product API Endpoint */

app.get('/api/kids/product', (req, res) => {

    try {
        
        res.status(200).json(Kids);

    } catch (error) {
        
        res.status(400).json({ error: error });

    }

});

app.listen(PORT, () => {

    console.log(`Server is starting on ${PORT}`);

});