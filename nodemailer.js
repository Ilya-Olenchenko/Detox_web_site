const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
        user: 'olenchenko.ilya@ukr.net',
        pass: 'xMtFO9eY34W50isD'
    }
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer