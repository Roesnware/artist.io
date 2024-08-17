module.exports = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        userSince: String
    }

    input UserInput {
        email: String
        username: String
        password: String
    }
    
    input UserUpdate {
        email: String
        username: String
        password: String
    }
`;