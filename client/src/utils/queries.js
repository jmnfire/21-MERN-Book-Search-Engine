import { gql } from '@apollo/client';

export const QUERY_ME = gql` {
    me {
      _id
      username
      email
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
