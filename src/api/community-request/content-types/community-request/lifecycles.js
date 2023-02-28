module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    const emailData = {
      firstName: result.firstName,
      email: result.email,
    }

    await strapi.service('api::community-request.community-request').sendEmail(emailData);

  }
};