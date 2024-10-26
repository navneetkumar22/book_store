import express from "express";
const router = express.Router();
import { addBook, deleteBook, getAllBooks, updateBook } from "../controllers/bookControllers.js";

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;