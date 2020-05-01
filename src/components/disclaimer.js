import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Disclaimer = () => {
  const data = useStaticQuery(graphql`
    query disclaimerQuery {
      site {
        siteMetadata {
          author {
            disclaimer
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <p style={{ fontSize: "12px" }}>
      <i>{author.disclaimer}</i>
    </p>
  )
}

export default Disclaimer
