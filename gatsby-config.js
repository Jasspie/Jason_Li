/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jason Li",
    description: "Personal Portfolio Website by Jason Li",
    author: "@JasonLi",
    image: "/jason-li.png",
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        collectionTypes: [],
        singleTypes: [`Home`, `About`, `Contact`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro\:200,300,400,400,700`, `Poppins\:400,500,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/assets/Logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
