const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// getting all 
router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
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
router.post('/', async (req, res) => {
    const book = new Book({
        _id: req.body._id,
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status,
        authors: req.body.authors,
        categories: req.body.categories
    })

    try {
        const b1 = await book.save()
        res.json(b1)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// updating one
router.put('/:id', async (req, res) => {
    res.send('Updating One')
})

// deleting one
router.delete('/:id', (req, res) => {
    res.send('Deleting One')
})

module.exports = router