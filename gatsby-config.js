module.exports = {
  siteMetadata: {
    title: "Enjambed",
    description: "A fictional site about a poetry data API company."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Enjamed",
        short_name: "enjambed",
        icon: `src/images/mark.svg`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `libre franklin\:400,800`,
          `libre baskerville\:400,400i,800,800i`,
        ],
      },
    },
    "gatsby-plugin-gatsby-cloud"
  ],
};
