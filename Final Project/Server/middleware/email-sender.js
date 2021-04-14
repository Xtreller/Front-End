const nodemailer = require('nodemailer');

let testAccount = nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false,
    // auth: {
    //     user: testAccount.user,
    //     pass: testAccount.pass
    // }
});
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server is ready to take our messages!");
    }
});

module.exports = transporter;