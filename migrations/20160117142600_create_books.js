
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (t) {
    t.increments();
    t.string('author');
    t.string('title');
    t.string('description');
    t.integer('rating');
    t.timestamps(); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
