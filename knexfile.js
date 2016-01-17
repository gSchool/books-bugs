module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/books-bugs'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
