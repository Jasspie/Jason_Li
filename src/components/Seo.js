import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// add siteUrl
const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
        siteUrl
        image
      }
    }
  }
`

export default function Seo() {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, image, author } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={siteTitle || "Jason Li"}>
      <meta name="description" content={siteDesc} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
    </Helmet>
  )
}
