const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Liam Goldfinch | .NET Developer`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages")
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: process.env.API_KEY
        },
        languageCodenames: [`default`]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
