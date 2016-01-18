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

router.post('/books', function (req, res, next) {
  Books().insert(req.body).then(function (results) {
    res.redirect('/books');
  })
})

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.get('/books/:id', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/show', {book: book});
  });
});

router.get('/books/:id/edit', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/edit', {book: book});
  });
});

router.post('/books/:id', function (req, res, next) {
  Books().where('id', req.params.id).update(req.body).then(function (results) {
    res.redirect('/books');
  })
});

router.post('/books/:id/delete', function (req, res, next) {
  Books().where('id', req.params.id).del().then(function (results) {
    res.redirect('/books');
  })
})

module.exports = router;
