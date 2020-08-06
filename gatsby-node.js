const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    graphql(`
      {
        allKontentItemArticle {
          edges {
            node {
              elements {
                url_slug {
                  value
                }
                base__title {
                  value
                }
                body_copy {
                  value
                }
              }
              system {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const { edges } = result.data.allKontentItemArticle;

      edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.elements.url_slug.value}`,
          component: path.resolve(`./src/templates/BlogPost.tsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: edge.node.elements.url_slug.value,
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
