import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required']
    },
    publication_year: {
        type: Number,
        required: [true, 'Publication year is required'],
        min: 1000,
        max: new Date().getFullYear()
    }
},
    {
        timestamps: true
    }
);

export default new mongoose.model('Book', bookSchema);