// import resolvers 
const userResolver = require('./resolvers/userResolver');
const blogPostResolver = require('./resolvers/blogPostResolver');

// combine resolvers
const resolvers = [
  userResolver,
  blogPostResolver,
];

// export resolvers
module.exports = resolvers;