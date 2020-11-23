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
const {google} = require('googleapis');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

const dev = app.get("env") !== "production";
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

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: "1//04YBxGg4QUByZCgYIARAAGAQSNwF-L9IruukvnqDl9LjilE9xFALOi670TKhquXikpLkdLKzCZH35CbgQz0LK9FFg0pWbp-fSI_s"
});
const accessToken = oauth2Client.getAccessToken()

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
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN
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

const server = createServer(app);

server.listen(PORT, error => {
    if(error) throw error;

    console.log("Server started!");
});