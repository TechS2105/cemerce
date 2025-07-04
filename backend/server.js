import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import shopProduct from './shop.js';
import menProduct from './Men.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

    res.status(200).json({ message: 'Every thing is okkk .... ' });

});

app.get('/api/shop/product', (req, res) => {

    res.status(200).json(shopProduct);

});

/** create Men Product api fetch point */
app.get('/api/men/product', (req, res) => {

    res.status(200).json(menProduct);

})

app.listen(PORT, () => {

    console.log(`Server is starting on ${PORT}`);

});