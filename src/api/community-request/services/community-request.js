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
      from: 'paul.bratslavsky@strapi.io', //e.g. single sender verification in SendGrid
      replyTo: 'codingafterthirty@gmail.com',
      subject: 'You are the best!',
      text: 'Hope you are having a great day!',
      html: 'Hope you are having a great day!',
    });
  },
}));
