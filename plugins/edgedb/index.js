module.exports = ({ strapi }) => {
    return {
      // Plugin code goes here
      async initialize() {
        strapi.log.info('EdgeDB plugin initialized!');
      },
    };
  };
  