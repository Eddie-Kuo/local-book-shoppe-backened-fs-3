const Author = require('../models/Author');
const Router = require('express');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const authorDetail = await Author.getById(req.params.id);
    res.json(authorDetail);
  })

  .get('/', async (req, res) => {
    const authorsList = await Author.getAll();
    res.json(authorsList);
  });
