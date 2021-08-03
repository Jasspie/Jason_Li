import React from "react"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Heading from "../components/Heading"
import AboutInfo from "../components/AboutInfo"
import Skills from "../components/Skills"
import { SKILLS } from "../constants/Constants"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        about_info
      }
    }
  }
`

export default function About() {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(query)

  // console.log(nodes[0])

  return (
    <>
      <Row className="mb-4">
        <Col lg={7} className="mx-auto">
          <Heading>About Me</Heading>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={7} className="mx-auto">
          <AboutInfo about={nodes[0].about_info} />
        </Col>
      </Row>
      <Row>
        <Col lg={9} className="mx-auto">
          <Skills skills={SKILLS} />
        </Col>
      </Row>
    </>
  )
}
