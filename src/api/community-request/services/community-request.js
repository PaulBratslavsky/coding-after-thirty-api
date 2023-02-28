'use strict';

/**
 * community-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-request.community-request', ({ strapi }) => ({
  async sendEmail(emailData) {



    const emailTemplate = {
      subject: 'You have another community request!',
      text: `<%= emailData.firstName %> with email <%= emailData.email %> has requested to join your community.`,
      html: `<h1>Welcome <%= emailData.firstName %></h1>
      <p><%= emailData.firstName %> with email <%= emailData.email %> has requested to join your community.<p>`,
    };

    await strapi.plugins['email'].services.email.send({
      to: 'paul.bratslavsky@strapi.io',
    }, emailTemplate, {
      emailData: emailData,
    });
  },
}));
