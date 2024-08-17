module.exports = `
    type BlogPost {
        _id: ID
        title: String
        description: String
        createdOn: String
    }

    input BlogPostInput {
        title: String
        description: String
    }

    input BlogPostUpdate {
        title: String
        description: String
    }
`;