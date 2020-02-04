module.exports = {
  siteMetadata: {
    title: `Something that hurts me`,
    description: `Many night before bed, after books are read and teeth are brushed, my son (3) will pause, look a bit pensive, and say, "Something that hurt me...", following up with something he doesn't like.

    It's a classic bed-time stalling maneuver. The general counter is that I ask him for something else that makes him feel good.
    
    The answers are generally charming though, and I'm building a site to celebrate this fleeting moment in his young life.`,
    author: `@aviwarner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `something-that-hurt-me`,
        short_name: `sthm`,
        start_url: `/`,
        background_color: `#42240c`,
        theme_color: `#42240c`,
        display: `minimal-ui`,
        icon: `src/images/sad_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
