const express = require('express');
const path = require('path');
const axios = require('axios');

// Apollo imports
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require('./graphql/typedefs.js');
const resolvers = require('./graphql/resolvers.js');

// Authentication import
const { authMiddleware } = require('./utils/auth');

// Define port
const PORT = process.env.PORT || 3001;

// Define app
const app = express();

// Database import
const db = require('./config/connection');

// Set up Apollo server
const server = new ApolloServer({
    typeDefs, resolvers
});

// AI Blog Post Generation Route
app.post('/api/generate-blog-post', async (req, res) => {
    const { characterName, clanName } = req.body;

    try {
        // Make a request to the OpenAI API
        const aiResponse = await axios.post('https://api.openai.com/v1/completions', {
            prompt: `Generate a blog post about the Naruto character ${characterName} from the ${clanName} clan.`,
            max_tokens: 200,
            model: "text-davinci-003",  // Specify the model to use
            temperature: 0.7  // Adjust the temperature for creativity
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Extract the generated text from the response
        const blogPost = aiResponse.data.choices[0].text;

        // Send the response back to the client
        res.json({
            title: `Learn More About ${characterName}`,
            description: blogPost.slice(0, 150) + '...', // Trim the content for a brief description
            link: `/blog/${characterName.replace(/\s+/g, '-').toLowerCase()}`
        });
    } catch (error) {
        console.error('Error generating blog post:', error);
        res.status(500).json({ error: 'Error generating blog post' });
    }
});

// Start Apollo server function
const startApolloServer = async () => {
    // Wait for server to start
    await server.start();

    // Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

    // Check if production code
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        // Send all requests to index
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    // Start up db server
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

// Call function to start Apollo server
startApolloServer();