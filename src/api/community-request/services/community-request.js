'use strict';

/**
 * community-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-request.community-request', ({ strapi }) => ({
  async sendEmail(data) {
    console.log(data)

    console.log("sendEmail called");

    await strapi.plugins['email'].services.email.send({
      to: 'paul.bratslavsky@gmail.com',
      from: 'paul.bratslavsky@strapi.io', //e.g. single sender verification in SendGrid
      replyTo: 'codingafterthirty@gmail.com',
      subject: 'You are the best!',
      text: `${data.firstName} with email ${data.email} has requested to join your community.`,
    });
  },
}));



    // const emailTemplate = {
    //   subject: 'You have another community request!',
    //   text: `<%= emailData.firstName %> with email <%= emailData.email %> has requested to join your community.`,
    //   html: `<h1>Welcome <%= emailData.firstName %></h1>
    //   <p><%= emailData.firstName %> with email <%= emailData.email %> has requested to join your community.<p>`,
    // };

    // await strapi.plugins['email'].services.email.send({
    //   to: 'paul.bratslavsky@strapi.io',
    // }, emailTemplate, {
    //   emailData: emailData,
    // });
