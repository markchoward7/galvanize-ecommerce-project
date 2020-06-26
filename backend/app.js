const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const queries = require('./queries')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send("It works")
})

const port = 3000
app.listen(port, () => console.log('App listening'))