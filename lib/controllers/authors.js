const Author = require('../models/Author');
const Router = require('express');

module.exports = Router().get('/', async (req, res) => {
  const authorsList = await Author.getAll();
  res.json(authorsList);
});
