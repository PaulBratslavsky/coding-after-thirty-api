'use strict';

/**
 * community-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::community-request.community-request', ({ strapi}) => ({
  async test(ctx) {
    // console.log(ctx);
    await strapi.service('api::community-request.community-request').sendEmail();
    return ctx.send({ message: 'Hello World!' });
  },
}));
