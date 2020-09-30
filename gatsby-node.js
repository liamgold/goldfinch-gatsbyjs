const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    graphql(`
      {
        allKontentItemBlogDetail {
          edges {
            node {
              elements {
                url_slug {
                  value
                }
              }
            }
          }
        }
      }
    `).then(result => {
      const { edges } = result.data.allKontentItemBlogDetail;

      edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.elements.url_slug.value}/`,
          component: path.resolve(`./src/templates/BlogPost.tsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: edge.node.elements.url_slug.value,
          },
        });
      });

      const postsPerPage = 6;
      const numPages = Math.ceil(edges.length / postsPerPage);
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
          component: path.resolve(`./src/templates/BlogPostListing.tsx`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
