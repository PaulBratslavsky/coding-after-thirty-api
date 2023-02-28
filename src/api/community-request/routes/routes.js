
module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'GET',
      path: '/community-request/test', 
      handler: 'community-request.test',
    },
  ]
}