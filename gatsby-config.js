module.exports = {
  siteMetadata: {
    title: `My First Jinsu's Blog`,
    description: `진수의 개발 블로그`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
