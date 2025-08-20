import dotenv from 'dotenv';
import createNewsletterMail from '../mailcontroller/newslettermail.js';

dotenv.config();

// POST Send Mail Router
const postSendMailRouter = (req, res) => {

    const { email } = req.body;
    
    const mail = {

        from: email,
        to: process.env.EMAIL,
        subject: "Cemerce Newsletter Subscription",
        html: `<p> Our newsletter has been subscribed by ${email} </p>`

    }

    createNewsletterMail.sendMail(mail, (error) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.json({
          status: 200,
          message: "Mail has been sent successfully...",
        });
      }
    });

}

export default {

    postSendMailRouter,

}