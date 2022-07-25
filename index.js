const express = require('express')
const bodyParser = require('body-parser')

const mailer = require('./nodemailer')

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json());

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/img/about'));
app.use(express.static(__dirname + '/img/help'));
app.use(express.static(__dirname + '/fonts'));

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/help', (req, res) => {
    if (!req.body.email || !req.body.name) return res.sendStatus(400)
    const message_to_base = {
        from: 'olenchenko.ilya@ukr.net',
        to: 'olenchenko.ilya@ukr.net',
        subject: 'Питання від клієнта "' + req.body.email + '"',
        text: 'Клієнт ' + req.body.name + '\n' + req.body.textarea
    }

    const message_to_client = {
        from: 'olenchenko.ilya@ukr.net',
        to: req.body.email,
        subject: 'Detox тех. пдтримка',
        text: 'Питання надіслано в тех. підтримку Детоксу, очікуйте відповідь найближчим часом.\n Гарного вам дня!'
    }
    mailer(message_to_base)
    mailer(message_to_client)
    res.redirect('/help')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/help.html')
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}...`))