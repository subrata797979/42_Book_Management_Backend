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
router.get('/:id', (req, res) => {
    res.send('Creating One')
})

// updating one
router.put('/:id', (req, res) => {
    res.send('Updating One')
})

// deleting one
router.delete('/:id', (req, res) => {
    res.send('Deleting One')
})

module.exports = router