import React from "react"
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"
import About from "./about"

const NavbarContainer = props => {
  return (
    <div>
      <Navbar color="faded" light>
        <Nav navbar>
          <NavItem>
            <About />
          </NavItem>
          {/* <NavItem>
            <NavLink href="/components/">Resume</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="https://github.com/coderaj" target="_blank">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarContainer
