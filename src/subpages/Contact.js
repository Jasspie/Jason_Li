import React from "react"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Heading from "../components/Heading"
import Footer from "../components/Footer"
import SocialMedia from "../components/contact/SocialMedia"

const query = graphql`
  {
    allStrapiContact {
      nodes {
        Contact
      }
    }
  }
`
const StyledContact = styled(motion.h4)`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-family: Source Sans Pro, sans-serif;
  margin-bottom: 2rem;
  // text-align: center;
`

const StyledDiv = styled.div`
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
`

const text = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
}

export default function Contact() {
  const {
    allStrapiContact: { nodes },
  } = useStaticQuery(query)
  const { Contact: data } = nodes[0]

  return (
    <>
      <Row style={{ height: "90vh" }} id="contact">
        <Row>
          <Col lg={12} className="mx-auto">
            <Heading>
              <StyledDiv>G E T</StyledDiv>
              <StyledDiv>I N</StyledDiv>
              <StyledDiv>C O N T A C T</StyledDiv>
            </Heading>
          </Col>
          <Col lg={8} className="mx-auto">
            <InView threshold={0.5} triggerOnce>
              {({ inView, ref, entry }) => {
                return (
                  <StyledContact
                    ref={ref}
                    variants={text}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                  >
                    {data}
                  </StyledContact>
                )
              }}
            </InView>
          </Col>
        </Row>
        <Row className="mt-3">
          <SocialMedia />
        </Row>
        <Row>
          <Row style={{ height: "10vh" }} />
          <Footer />
        </Row>
      </Row>
    </>
  )
}
