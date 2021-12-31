const express = require('express')
const router = express.Router()
const Books = require('../models/book')

// getting all 
router.get('/', async (req, res) => {
    try {
        const books = await Books.find()
        res.json(books)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// getting one
router.get('/:id', (req, res) => {
    res.send('Getting One')
})

// creating one

// updating one

// deleting one


module.exports = router