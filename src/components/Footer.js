import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { media } from "../themes/Media"

const StyledFooter = styled.h5`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-family: Inter, sans-serif;
  @media ${media.md} {
    text-align: center;
    margin-right: 1rem;
  }
`
const text = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
}

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref, entry }) => {
              return (
                <motion.div
                  ref={ref}
                  variants={text}
                  initial="initial"
                  animate={inView ? "animate" : "initial"}
                >
                  <StyledFooter>&copy; Designed and Developed</StyledFooter>
                  <StyledFooter>
                    by Jason Li, {new Date().getFullYear()}
                  </StyledFooter>
                </motion.div>
              )
            }}
          </InView>

          <div style={{ height: "5vh" }} />
        </Col>
      </Row>
    </Container>
  )
}
