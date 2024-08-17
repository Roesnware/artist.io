// import model
const User = require('../../models/User');
// import mongoose
const {
  Types: { ObjectId },
} = require('mongoose');

// import authentication
const { signToken, AuthenticationError } = require('../../utils/auth');

const bcrypt = require('bcrypt');
const { genSalt } = require('bcrypt');

// user resolver
const userResolver = {
  // queries
  Query: {
    currentUser: async (_, _args, { user }) => {
      try {
        if (user) {
          return await User.findOne({ _id: user._id })
            .select('-__v -password')
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    // read user by ID
    getUserByID: async (_, { ID }) => {
      try {
        const user = await User.findById(new ObjectId(ID));

        if (!user) {
          throw new Error('User not found');
        }

        return user;
      } catch (err) {
        throw new Error(`Error getting user: ${err.message}`);
      }
    },
  },

  // mutations
  Mutation: {
    // create user
    createUser: async (
      _,
      { userInput: { username, email, password, } }
    ) => {
      try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = {
          username,
          email,
          password: hashedPassword,
          userSince: new Date().toISOString(),
        };
        const user = await User.create(newUser);
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        throw new Error(`Error creating user: ${err.message}`);
      }
    },

    // update user
    updateUser: async (
      _,
      { ID, userUpdate: { 
        username, 
        email, 
       } }
    ) => {
      try {
        // const saltRounds = 10;
        // const salt = await bcrypt.genSalt(saltRounds);
        // const hashedPassword = await bcrypt.hash(password, salt);

        const updatedUser = await User.findByIdAndUpdate(
          new ObjectId(ID),
          {
            username,
            email,

          },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error('User not found');
        }

        return updatedUser;
      } catch (err) {
        throw new Error(`Error updating user: ${err.message}`);
      }
    },

    // delete user
    deleteUser: async (_, { ID }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(
          new ObjectId(ID)
        );
        if (!deletedUser) {
          throw new Error('User not found');
        }

        return deletedUser;
      } catch (err) {
        throw new Error(`Error deleting user: ${err.message}`);
      }
    },

    // login user
    loginUser: async (_, { username, password }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw AuthenticationError;
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error(`${err.message}`);
      }
    },
  },
};

// export user resolver
module.exports = userResolver;