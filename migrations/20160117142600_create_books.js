
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (t) {
    table.increments();
    table.string('author');
    table.string('title');
    table.string('description');
    table.integer('rating');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
