var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Books() {
  return knex('books');
}
//shows all books on the index page
router.get('/books', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('books/index', {books: books});
  })
});
//adds new book to database
router.post('/books/new', function(req, res, next) {
  var book = {
    author: req.body.author,
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description
  }
  Books().insert(book).then(function(result) {
    res.send('/books');
  });
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
