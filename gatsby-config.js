require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      siteUrl: `https://serverless.com`,
    },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-53WNQ5M",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon.png",
        appName: 'Serverless',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
        }
      }
    }
  ],
}
