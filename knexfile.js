module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todosdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
