const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Book{
    _id: ID!
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
    authors: [String]
}

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
