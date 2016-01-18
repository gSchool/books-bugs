module.exports = {

  develpment: {
    client: 'pg',
    connection: 'postgres://localhost/books_bugs'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
