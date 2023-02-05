const nodemailer = require ('nodemailer');
//constraseña de aplicacion
require ('dotenv').config();
//creat transportador
const transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: 'cristian230677@gmail.com',
        pass: process.env.G_PASSWORD,
    },
});

module.exports = transporter;