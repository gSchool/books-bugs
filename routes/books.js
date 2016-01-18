var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Books() {
  return knex('books');
}

// LIST ALL
router.get('/', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('books/index', {books: books});
  })
});

// CREATE
router.post('/', function (req, res, next) {
  Books().insert(req.body).then(function (results) {
    res.redirect('/books');
  })
})

// NEW
router.get('/new', function(req, res, next) {
  res.render('books/new');
});

// SHOW
router.get('/:id', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/show', {book: book});
  });
});

// EDIT
router.get('/:id/edit', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/edit', {book: book});
  });
});

// UPDATE
router.post('/:id', function (req, res, next) {
  Books().where('id', req.params.id).update(req.body).then(function (results) {
    res.redirect('/');
  })
});

// DELETE
router.post('/:id/delete', function (req, res, next) {
  Books().where('id', req.params.id).del().then(function (results) {
    res.redirect('/');
  })
})

module.exports = router;
