import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {  
  let query = gql`
    query MyQuery {
      abouts {
        aboutDescription
        aboutTitle
        aboutImage {
          url
        }
      }
      forms {
        formDescription
        formTitle
      }
      homes {
        homeImage {
          url
        }
        homeTitle
      }
      services {
        serviceTitle
        serviceDescription
      }
    }
  `;

  try {
    const request = await hygraph.request(query);
    return request;
  } catch (error) {
    console.error('GraphQL Error:', error);
  }
}
