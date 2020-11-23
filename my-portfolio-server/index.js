require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();


const corsOptions = {
    origin: ["https://taci.dev", "https://taci-portfolio.herokuapp.com"],
    optionsSuccessStatus: 204,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/form", async (request, response, next) => {
    const htmlEmail = `
        <p>New message from your Porfolio<p>
        <h3>Contact Details</h3>
        <ul>
            <li>From: ${request.body.name}</li>
            <li>Email: ${request.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${request.body.message}</p>
    `
    let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        },
    });
 
    let mail = {
        from: request.body.email,
        to: process.env.GMAIL_USER, 
        subject: "You have a new message!", 
        text: request.body.message, 
        html: htmlEmail, 
    };

    transporter.sendMail(mail, (error, data) => {
        if(error) {
            console.log('error', error);
            response.json({ message: "An error occured, please try again."})
        } else {
            console.log("Message sent");
            response.json({ message: `Message sent: %s, ${data.message}` })
        }
        next();
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

