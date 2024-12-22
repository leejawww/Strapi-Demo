// ./plugins/edgedb/src/client.js
const e = require('edgedb');

const client = e.createClient({
  host: 'localhost', // EdgeDB host
  port: 5656,        // EdgeDB port
  database: 'mydb',  // EdgeDB database
  user: 'lijah', // EdgeDB user
  password: 'lijah', // EdgeDB password
});

module.exports = client;
