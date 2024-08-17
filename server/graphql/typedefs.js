// import type defs 
const userTypeDefs= require('./typedefs/userTypeDefs');
const blogPostTypeDefs= require('./typedefs/blogPostTypeDefs');

// export typedefs
module.exports = `
    ${userTypeDefs}
    ${blogPostTypeDefs}
    
    type Auth {
        token: ID!
        username: username
    }
    
    type Query {
        currentUser: User
        getUserByID(ID : ID!): User!
    }
 
    type Mutation {
        createUser(userInput: UserInput!): Auth
        updateUser(ID : ID!, userUpdate: UserUpdate!): User!
        deleteUsers(ID : ID!): User!
        
        loginUser(username: String!, password: String!): Auth
        
        createBlogPost(invoiceInput: InvoiceInput): BlogPost!
        updateBlogPost(ID: ID!, blogPostUpdate: BlogPostUpdate): BlogPost!
        deleteBlogPost(ID : ID!): BlogPost!
    }
`