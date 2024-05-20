import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
  const query = gql`
    query MyQuery {
      homes {
        homeImage {
          url
        }
        homeTitle
      }
      abouts {
        aboutImage {
          url
        }
        aboutTitle
        aboutDescription
      }
      services {
        serviceTitle
        serviceDescription
      }
      forms {
        formTitle
        formDescription
      }
    }
  `;

  const data = await hygraph.request(query);
  console.log('Data fetched:', data);  // Voeg deze regel toe om te zien wat er wordt opgehaald
  return { data };
}
