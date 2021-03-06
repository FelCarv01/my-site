/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Felipe Carvalho",
    position: "Web Developer.",
    description: `Estudante de Analise e desenvolvimento de sistemas, 
    aprendendo desenvolvimento web, Python - javascript .`,
    author: `Felipe Carvalho`,
    siteUrl: `https://felcarv.net`,
    url: "https://felcarv.net",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felipe Carvalho`,
        description: "Brazilian Web Developer",
        short_name: `Felipe`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#644396`,
        display: `standalone`,
        icon: `${__dirname}/static/images/F-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `source sans-serif\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },

    `gatsby-plugin-styled-components`,

    // Add any options here
  ],
}
