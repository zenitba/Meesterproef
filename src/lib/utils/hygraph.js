// src/lib/utils/hygraph.js
import { GraphQLClient } from 'graphql-request';
import { HYGRAPH_URL, HYGRAPH_KEY } from '$env/static/private';

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
    headers: {
        Authorization: `Bearer ${HYGRAPH_KEY}`
    }
});
