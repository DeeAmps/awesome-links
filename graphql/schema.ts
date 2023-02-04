import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Link {
    id: ID
    description: String
    url: String
    imageUrl: String
    title: String
    category: String
  }

  type Query {
    links: [Link!]!
  }
`;
