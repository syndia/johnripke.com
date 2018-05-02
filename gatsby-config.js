module.exports = {
  siteMetadata: {
    title: `John Ripke | Front-end Developer & UX Designer`,
    author: `John Ripke`,
    description: `Hi, I am John Ripke a Dutch front-end developer & UX Designer.`,
    siteURL: `https://johnripke.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
  ],
}
