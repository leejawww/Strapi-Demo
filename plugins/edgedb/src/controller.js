// ./plugins/edgedb/src/controllers.js
module.exports = {
    async find(ctx) {
      const { collection, conditions } = ctx.request.query;
      const data = await strapi.plugins['edgedb'].services.findData(collection, conditions);
      ctx.send(data);
    },
  
    async create(ctx) {
      const { collection, data } = ctx.request.body;
      const createdData = await strapi.plugins['edgedb'].services.createData(collection, data);
      ctx.send(createdData);
    },
  };
  