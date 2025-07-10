import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import env from 'dotenv';
import shopProduct from './shop.js';
import menProduct from './Men.js';
import menCollections from './Mencollections.js';
import Women from './Women.js';
import womenCollections from './Womencollections.js';
import Kids from './Kids.js';
import KidCollection from './Kidscollections.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import pg from 'pg';

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const db = new pg.Client({

    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT

});

db.connect();

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

/** Create Kids Collection API Endpoint */

app.get('/api/kids/collections/product', (req, res) => {

    try {
        
        res.status(200).json(KidCollection);

    } catch (error) {
        
        res.status(400).json({message: error});

    }

});

/** Create Newsletter Mail Endpoint */

app.get('/api/send/mail', (req, res) => {

    res.status(400).json({ message: "Ready to send mail..." });

});

const newsletterMail = nodemailer.createTransport({

    service: "gmail",
    host: 'smpt.gmail.com',
    port: '465',
    secure: true,
    logger: false,
    debug: true,
    secureConnection: true,
    auth: {
        
        user: 'sovandey2105@gmail.com',
        pass: 'qilqsyuoyhkhxaom'

    },
    tls: {

        rejectUnauthorized: true

    }

});

newsletterMail.verify((error) => {

    if (error) {
        
        res.json(error)

    } else {
        
        console.log('Ready To Send');

    }

});

app.post('/api/send/mail', (req, res) => {

    console.log(req.body);

    const { email } = req.body;

    const mail = {

        from: email,
        to: 'sovandey2105@gmail.com',
        subject: 'You got a newsletter mail',
        html: `<p> ${email} This person has been subscribe C-EMERCE Newsletter </p>`

    }

    newsletterMail.sendMail(mail, (error) => {

        if (error) {
            
            res.json(error)

        } else {
            
            res.json({

                code: 200,
                status: 'Mail has been send successfully'

            })

        }

    })

});

/** Create Register Endpoint */
app.get('/register', (req, res) => {
    
    try {
        
        res.status(200).json({ message: "Successfully created registered endpoint..." })

    } catch (error) {
        
        res.json( error );

    }

});

app.post('/register', async (req, res) => {

    console.log(req.body);

    const { fullname, email, mobile, password } = req.body;

    const checkCustomer = await db.query("SELECT * FROM customer WHERE email = $1", [email]);

    if (checkCustomer.rows.length > 0) {
        
        res.status(200).json({ message: "Your are already exists.." });

    } else {
        
        bcrypt.genSalt(10, (error, salt) => {

            if (error) {
                
                res.status(400).json({ message: error });

            }
                
            bcrypt.hash(password, salt, async (error, hash) => {

                if(error){

                    res.status(400).json({ message: error });

                }

                await db.query("INSERT INTO customer(name, email, mobile, password) VALUES($1, $2, $3, $4)", [fullname, email, mobile, hash]);

            });

        })

    }

});

/** Server Port */

app.listen(PORT, () => {

    console.log(`Server is starting on ${PORT}`);

});