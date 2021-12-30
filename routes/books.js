const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async(req,res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.send('Error : '+error)
    }
})

router.post('/', async(req,res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author
    })

    try {
        const msg = await Book.save()
        res.json(msg)
    } catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router