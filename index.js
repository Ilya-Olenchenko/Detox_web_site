import express from 'express'
import path from 'path'
const __dirname = path.resolve()

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json());

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/style/main.css'));

app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/help', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'help.html'))
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}...`))