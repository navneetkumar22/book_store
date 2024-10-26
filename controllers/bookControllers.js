import Book from '../models/bookSchema.js';

/****************
 * Add a new book
 ****************/
export const addBook = async (req, res) => {
    try {
        const { title, author, genre, publication_year } = req.body;

        if (!title || !author || !genre || !publication_year) {
            return res.status(400).json({
                error: 'All fields are required'
            })
        }

        // Validate publication year
        const currentYear = new Date().getFullYear();
        if (publication_year < 1000 || publication_year > currentYear) {
            return res.status(400).json({
                error: `Invalid publication year. It should be between 1000 and ${currentYear}`
            })
        }

        //create new book
        const newBook = await Book.create({ title, author, genre, publication_year });

        // return success
        res.status(201).json({
            success: true,
            message: 'Book added successfully',
            book: newBook
        })


    } catch (error) {
        console.error(error);

        //handle mongoose validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message)
            return res.status(400).json({ error: messages.join(', ') })
        }

        res.status(500).json({
            success: false,
            error: 'Failed to add the book'
        })
    }
}


/****************
 * Get all books
 ****************/
export const getAllBooks = async (_req, res) => {
    try {
        const books = await Book.find();

        //if there are no books
        if (books.length === 0) {
            return res.status(404).json({
                message: 'There are no books'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            books
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: 'Failed to retrieve books'
        })
    }
}


/****************
 * Update a book
 ****************/
export const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;

        const updatedBook = await Book.findByIdAndUpdate(
            bookId,
            req.body,
            { new: true, }
        )

        //check if the book does not found
        if (!updatedBook) {
            return res.status(404).json({
                message: 'Book not found'
            })
        }

        res.status(200).json({
            message: 'Book updated successfully',
            book: updatedBook
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: 'Failed to update the book'
        })
    }
}


/****************
 * Delete a book
 ****************/
export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully'
        })

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: 'Failed to delete the book'
        })
    }
}