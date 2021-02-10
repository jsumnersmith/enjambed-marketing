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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Libre Franklin`,
            variants: [`400`, `800`],
          },
          {
            family: `Libre Baskerville`,
            variants: [`400`, `800`, `400Italic`, `800Italic`]
          },
        ],
      },
    }
  ],
};
