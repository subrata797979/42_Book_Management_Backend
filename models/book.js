const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    _id: {
        type: Number,
        require: false
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: false
    },
    pageCount: {
        type: Number,
        required: false
    },
    publishedDate: {
        type: Date,
        required: false
    },
    thumbnailUrl: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: false
    },
    longDescription: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    authors: {
        type: Array,
        required: false
    },
    categories: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Book', bookSchema)