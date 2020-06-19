const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: process.env.API_KEY,
        languageCodenames: ['default'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-100971234-1',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Liam Goldfinch - .NET Developer',
        short_name: 'Goldfinch',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#212121',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/assets/icon.png',
      },
    },
    // If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed
    // after that plugin so the manifest file can be included in the service worker.
    `gatsby-plugin-offline`,
  ],
};
