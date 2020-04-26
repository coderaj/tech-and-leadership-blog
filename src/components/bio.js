/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { Container, Row, Col } from "reactstrap"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inlogo: file(absolutePath: { regex: "/icons8-linkedin-50.png/" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      locationLogo: file(absolutePath: { regex: "/location.png/" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author {
            name
            summary
            linkedin
            location
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Container fluid style={{ padding: "0px" }}>
      <Row style={{ justifyContent: "left" }}>
        <Col md="1">
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 10,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Col>
        <Col />
      </Row>
      <Row style={{ justifyContent: "left" }}>
        <Col md="1">
          <Image
            fixed={data.inlogo.childImageSharp.fixed}
            alt={"LinkedIn"}
            style={{ marginBottom: 0 }}
          />
        </Col>
        <Col md="8">
          <p>
            <a href={data.site.siteMetadata.author.linkedin}>{author.name}</a>
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "left" }}>
        <Col md="1">
          <Image
            fixed={data.locationLogo.childImageSharp.fixed}
            alt={"Bengaluru"}
            style={{ marginBottom: 0 }}
          />
        </Col>
        <Col md="9">{author.location}</Col>
      </Row>
    </Container>
  )
}

export default Bio
