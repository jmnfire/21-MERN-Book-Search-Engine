import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        userName
        email
        bookCount
        savedBooks {
          description
          title
          bookId
          image
          link
          authors
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: saveBook!) {
    saveBook(input: $input) {
      _id
      userName
      email
      bookCount
      savedBooks {
        description
        title
        bookId
        image
        link
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        description
        title
        bookId
        image
        link
        authors
      }
    }
  }
`;
