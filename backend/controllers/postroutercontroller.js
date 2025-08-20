import dotenv from 'dotenv';
import createNewsletterMail from '../mailcontroller/newslettermail.js';
import db from '../database/database.js';

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

// POST Cart Product Router
const postCartProductRouter = async(req, res) => {

  const { image, title, category, price } = req.body;

  try {
    
    const checkCartProduct = await db.query("SELECT * FROM cart WHERE title = $1", [title]);

    if (checkCartProduct.rows.length > 0) {

      res.status(200).json({ message: "Your product already been exists" });

    } else {

      await db.query("INSERT INTO cart(image, title, category, price) VALUES($1, $2, $3, $4)", [image, title, category, price]);
      res.status(200).send();

    }

  } catch (error) {
    
    console.log(error)

  }

}

export default {

  postSendMailRouter,
  postCartProductRouter,

}