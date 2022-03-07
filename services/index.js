import { request, gql } from "graphql-request";

const endpoint = process.env.PORTFOLIO_API_ENDPOINT;

export const getPosts = async () => {
  const query = gql`    
    query MyQuery {
        postsConnection {
          edges {
            node {
              createdAt
              excerpt
              title
              slug
              featured
              categories {
                name
                slug
              }
              author {
                name
                image {
                  url
                }
              }
            }
          }
        }
      }
      
    `;


  const data = await request(endpoint, query);
  return data.postsConnection.edges;

}


export const getPostDetails = async (slug) => {
  const query = gql`    
    query postDetailQuery($slug : String!){
      post(where:{slug:$slug}){
        createdAt
        excerpt
        title
        slug
        categories {
          name
          slug
        }
        author {
          name
          image {
            url
          }
        }
        content {
          raw
        }
      }
    }
    `;


  const data = await request(endpoint, query, { slug });
  return data.post

}

