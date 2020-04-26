import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

import { rhythm, scale } from "../utils/typography"
import Sidebar from "./sidebar"

const Layout = ({ location, title, children }) => {
  let header

  header = (
    <h1
      style={{
        ...scale(1),
        marginBottom: rhythm(1),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container fluid>
        <Row>
          <Col md="2">
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Sidebar />
            </div>
          </Col>
          <Col md="6">
            <div
              style={{
                width: `100%`,
                height: `100%`,
                maxWidth: rhythm(25),
                padding: `${rhythm(1)} ${rhythm(1 / 3)}`,
              }}
            >
              {header}
              {children}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col md="6">
            <footer style={{ padding: "8px" }}>
              notes created @ {new Date().getFullYear()}
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout
