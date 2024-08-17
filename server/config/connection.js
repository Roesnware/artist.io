// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// mongo cloud db 
const MONGODB_URI = process.env.MONGODB_URI;

// connect to db
mongoose.connect(
    MONGODB_URI || "mongodb+srv://admin:adminadmin@dattebayo.0fchs.mongodb.net/?retryWrites=true&w=majority&appName=Dattebayo"
);

// export connection
module.exports = mongoose.connection;