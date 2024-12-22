// ./plugins/edgedb/src/services.js
const connector = require('./connector');

module.exports = {
  async findData(collection, conditions) {
    return await connector.find(collection, conditions);
  },

  async createData(collection, data) {
    return await connector.create(collection, data);
  },
};
