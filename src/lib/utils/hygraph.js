import { HYGRAPH_URL, HYGRAPH_KEY } from '$env/static/private';
import { GraphQLClient, gql } from 'graphql-request';

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`
  }
});