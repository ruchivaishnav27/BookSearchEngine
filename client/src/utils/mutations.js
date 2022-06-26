import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        HEAD!
        User
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        HEAD!
        User
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(author: Array!, description: String!, title: String!, bookId: ID!, image: Image!, link: Params!) {
    saveBook(author: Array!, description: String!, title: String!, bookId: ID!, image: Image!, link: Params!) {
        id: ID
        authors: Array
        description: String
        title: String
        image: Image
        link: Params
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: Params!) {
    removeBook(bookId: Params!) {
        id: ID
    }
  }
`;
