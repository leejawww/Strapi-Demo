// ./plugins/edgedb/src/connector.js
const edgeDBClient = require('./client');

module.exports = {
  async find(collection, conditions) {
    try {
      const query = `SELECT ${collection} WHERE ${conditions}`;
      return await edgeDBClient.query(query);
    } catch (error) {
      console.error('Error finding data in EdgeDB:', error);
    }
  },

  async create(collection, data) {
    try {
      const query = `INSERT INTO ${collection} (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).join(', ')})`;
      return await edgeDBClient.query(query);
    } catch (error) {
      console.error('Error creating data in EdgeDB:', error);
    }
  },
};
