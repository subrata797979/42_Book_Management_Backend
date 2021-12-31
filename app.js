require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected To Database!'))

// middleware
app.use(express.json())

// books route
const bookRouter = require('./routes/books')
app.use('/api/books', bookRouter)

app.listen(9000, () => console.log('Server Started in port 9000!'))