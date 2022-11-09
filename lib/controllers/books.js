const Book = require('../models/Book');
const { Router } = require('express');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const bookDetail = await Book.getById(req.params.id);
    res.json(bookDetail);
  })
  .get('/', async (req, res) => {
    const bookList = await Book.getAll();
    res.json(bookList);
  });
