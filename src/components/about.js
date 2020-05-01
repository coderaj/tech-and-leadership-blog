import React, { useState } from "react"

import { Collapse, Button, Card, CardBody } from "reactstrap"
import Bio from "./bio"

const About = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Button
        color="white"
        onClick={toggle}
        style={{
          align: "left",
          padding: "1px",
          color: "${props => props.theme.colors.textColor}",
          backgroundColor: "${props => props.theme.colors.background}",
        }}
      >
        About
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Bio />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}

export default About
