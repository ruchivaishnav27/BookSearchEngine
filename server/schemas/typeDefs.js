const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: Array!, description: String!, title: String!, bookId: ID!, image: Image!, link: Params!): User
    removeBook(bookId: Params!): User

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Number
    saveBook: Array
  }

  type Book {
    id: ID
    authors: Array
    description: String
    title: String
    image: Image
    link: Params
  }

  type Auth {
    token: HEAD!
    user: User
  }
`;

module.exports = typeDefs;

