import React, { useState } from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import styled, { ThemeProvider } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Sidebar from "./sidebar"
import Disclaimer from "./disclaimer"

import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

const ThemeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
`

const Layout = ({ location, title, children }) => {
  let localIsDark

  if (typeof window !== "undefined") {
    if (localStorage.getItem("isDark") === "false") {
      localIsDark = false
    } else {
      localIsDark = true
    }
    console.log(localIsDark ? "dark mode" : "light mode")
  }
  const [isDark, setIsDark] = useState(localIsDark)

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
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ThemeContainer>
          <Container fluid>
            <Row>
              <Col md="2">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Sidebar isDark={isDark} setIsDark={setIsDark} />
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
                  <Disclaimer />
                </footer>
              </Col>
            </Row>
          </Container>
        </ThemeContainer>
      </ThemeProvider>
    </div>
  )
}

export default Layout
