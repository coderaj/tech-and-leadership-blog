import React from "react"
import NavbarContainer from "./navbar"
import Icon from "./icon"

const Sidebar = ({ isDark, setIsDark }) => (
  <div>
    <div class="col-xs-12" style={{ height: "150px" }}></div>
    <div>
      <NavbarContainer />
    </div>
    <div class="col-xs-12" style={{ height: "300px" }}></div>
    <Icon isDark={isDark} setIsDark={setIsDark} />
  </div>
)

export default Sidebar
