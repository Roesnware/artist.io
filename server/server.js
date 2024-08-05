// imports
// express 
const express = require('express');
const path = require('path');

// apollo 
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const typeDefs = require('./graphql/typedefs.js');
const resolvers = require('./graphql/resolvers.js');

// authentication 
const { authMiddleware } = require('./utils/auth');

// define port 
const PORT = process.env.PORT || 3001;

// define app
const app = express();

// database 
const db = require('./config/connection');

// set up server 
const server = new ApolloServer({
    typeDefs, resolvers
});

// start up apollo server func
const startApolloServer = async () => {
    // wait for server to start
    await server.start();

    // middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

    // check if production code
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        // send all request to index
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    // start up db server
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

// call func to start apollo server
startApolloServer();

