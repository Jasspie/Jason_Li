import React from "react"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Heading from "../components/Heading"
import AboutInfo from "../components/about/AboutInfo"
import Skills from "../components/about/Skills"
import { SKILLS } from "../constants/Skills"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        about_info
      }
    }
  }
`
const StyledDiv = styled.div`
  display: inline-block;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`

export default function About() {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(query)

  return (
    <>
      <Row className="mb-4" id="about">
        <Row style={{ height: "10vh" }} />
        <Col lg={12} className="mx-auto">
          <Heading>
            <StyledDiv>A b o u t </StyledDiv>
            <StyledDiv> M e</StyledDiv>
          </Heading>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={7} className="mx-auto">
          <AboutInfo about={nodes[0].about_info} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={9} className="mx-auto">
          <Skills skills={SKILLS} />
        </Col>
      </Row>
    </>
  )
}
