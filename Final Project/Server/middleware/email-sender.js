const nodemailer = require('nodemailer');

const sendEmail = (email, jwtString) => {
    var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'vladsito@gmail.com',
            pass: "Ilchev160698."
        }
    })
    var mailOptions = {
        from: 'My-Imdb',
        to: email,
        subject: "Email confirmation!",
        html: `Press <a href="http://localhost:3000/confirmation/${jwtString}">here </a>to verify your email!`
    }
    transport.sendMail(mailOptions, function (error, success) {
        if (error) {
            console.log(error)
        }
        else {
            console.log('message sent!')
        }

    })
}
module.exports = { sendEmail };