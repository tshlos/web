const express = require("express");
require("dotenv").config();
const {createServer} = require("http");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: ["https://taci.dev", "https://taci-portfolio.herokuapp.com"],
    optionsSuccessStatus: 204,
    allowedHeaders: ["Origin", "X-Requested-With", "X-PINGOTHER", "Content-Type", "Accept"],
    credentials: true,
    preflightContinue: false,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}
app.use(cors(corsOptions));


app.post("/api/form", (request, response, next) => {
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

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // port: 587,
        // secure: false,
        requireTLS: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        },
    });
    console.log("gmail", process.env.GMAIL_USER, "username" )
    console.log("gmail", process.env.GMAIL_PASSWORD, "password")
 
    let mail = {
        from: request.body.email,
        to: process.env.GMAIL_USER, 
        subject: "You have a new message!", 
        text: request.body.message, 
        html: htmlEmail, 
    };
    console.log('mail', mail);

    transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

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

const dev = app.get("env") !== "production";
if(!dev) {
    app.disable("x-powered-by");
    app.use(compression());
    app.use(morgan("common"));

    app.use(express.static(path.resolve(__dirname, "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "build", "index.html"))
    });
}

if(dev) {
    app.use(morgan("dev"));
}

if (process.env.NODE_ENV !== "production") { 
    require("dotenv").config();
}

const server = createServer(app);

server.listen(PORT, error => {
    if(error) throw error;

    console.log("Server started!");
});