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

router.post('/books', function(req, res){
  var book = {
    author: req.body.author,
    title: req.body.tittlywinks,
    rating: req.body.rating,
    description: req.body.description,
  }

  Books().insert(book).then(function(result){
    res.redirect('/books');
  })
});

router.get('/books/:book_id/show', function(req, res, next) {
  Books().where('id', req.params.book_id).first().then(function(book){
    res.render('books/show', {book: book});
  })
});

router.get('/books/:book_id/edit', function(req, res, next) {
  Books().where('id', req.params.book_id).first().then(function(book){
    res.render('books/edit', {book: book});
  })
});



module.exports = router;
