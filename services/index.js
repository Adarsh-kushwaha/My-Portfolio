import { request, gql } from "graphql-request";

const endpoint = process.env.PORTFOLIO_API_ENDPOINT

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

export const getProjects = async () => {
  const query = gql`
  query projectQuery {
    projectsConnection {
      edges {
        node {
          gitHubLink
          completedAt
          createdAt
          projectLink
          slug
          summary
          techUsed
          title
          categories {
            name
          }
          icon {
            url
          }
          featuredProject
          started
        }
      }
    }
  }
  `;

  const data = await request(endpoint, query);
  return data.projectsConnection.edges;

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


//fetching featured projects

export const getFeaturedProjects = async () => {
  const query = gql`
    query getFeaturedProjects() {
      projects(where: {featuredProject: true}) {
        completedAt
        projectLink
        summary
        started
        techUsed
        title
        icon {
          url
        }
        featuredProject
        slug
      }
    }   
  `;

  const result = await request(endpoint, query);

  return result.projects;
};

//fetching featured blog

export const getFeaturedBlogs = async () => {
  const query = gql`    
    query getFeaturedBlogs(){
      posts(where : {featured:true}){
        createdAt
        excerpt
        featured
        slug
        title
        author {
          name
        }
      }
    }
    `;


  const data = await request(endpoint, query);
  return data.post

}
