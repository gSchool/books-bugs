var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Books() {
  return knex('books');
}
// main page get request, display all books
router.get('/', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('books/index', {books: books});
  })
});
// add new book from add form
router.post('/', function (req, res, next) {
  Books().insert(req.body).then(function (results) {
    res.redirect('/books');
  })
})
// display individual book
router.get('/:id', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/show', {book: book});
  });
});

router.get('/new', function(req, res, next) {
  res.render('books/new');
});

router.get('/:id/edit', function(req, res, next) {
  Books().where('id', req.params.id).first().then(function (book) {
    res.render('books/edit', {book: book});
  });
});

router.post('/:id', function (req, res, next) {
  Books().where('id', req.params.id).update(req.body).then(function (results) {
    res.redirect('/books');
  })
});
router.post('/:id/delete', function (req, res, next) {
  Books().where('id', req.params.id).del().then(function (results) {
    res.redirect('/books');
  })
})

module.exports = router;
