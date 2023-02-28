'use strict';

/**
 * community-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-request.community-request', ({ strapi }) => ({
  async sendEmail(args) {
    console.log("sendEmail called");
    await strapi.plugins['email'].services.email.send({
      to: 'paul.bratslavsky@gmail.com',
      from: 'no-reply@strapi.io', //e.g. single sender verification in SendGrid
      replyTo: 'codingafterthirty@gmail.com',
      subject: 'The Strapi Email plugin worked successfully',
      text: 'Hello world!',
      html: 'Hello world!',
    });
  },
}));
