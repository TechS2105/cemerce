import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create Mail Sender Template
const createNewsletterMail = nodeMailer.createTransport({

    service: 'gmail',
    host: 'smtp.gamil.com',
    port: '465',
    logger: false,
    debug: true,
    secure: true,
    secureConnection: true,
    auth: {
        
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS

    },
    tls: {
        
        rejectUnauthorized: true,

    }

});

createNewsletterMail.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready to send...");

    }

});

export default createNewsletterMail;