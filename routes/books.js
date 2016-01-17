var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Books() {
  return knex('books');
}

router.get('/books', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('books/index', {books: books});
  })
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.get('/books/show', function(req, res, next) {
  res.render('books/show', {book: book});
});

router.get('/books/edit', function(req, res, next) {
  res.render('books/edit', {book: book});
});

module.exports = router;
