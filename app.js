const express = require('express')
const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost/DashboardDb'

const app = express()

mongoose.connect(dbUrl)
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected To Database!')
})

// middleware
app.use(express.json())

// home route
app.use('/', (req, res) => {
    res.send('home route hit!')
})

// books route
const bookRouter = require('./routes/books')
app.use('/books',bookRouter)

app.listen(9000, () => {
    console.log('Server Started!')
})