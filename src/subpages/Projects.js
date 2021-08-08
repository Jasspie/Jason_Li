import React, { useRef, Fragment } from "react"
import { Row, Col, Image } from "react-bootstrap"
import useRefScrollProgress from "../hooks/useRefScrollProgress"
import { useViewportScroll, useTransform, motion } from "framer-motion"
import styled from "styled-components"

import Heading from "../components/Heading"
import Laptop from "../components/Laptop"
import Project from "../components/Project"
import { PROJECT_IMAGES } from "../constants/Projects"
import ImageOpacity from "../components/ImageOpacity"

const StyledLaptop = styled(Row)`
  height: 90vh;
  //   border: 10px solid blue;
  position: sticky;
  top: 0rem;
`

export default function Projects() {
  const { scrollYProgress } = useViewportScroll()

  const initial = useRef()
  const { start: initialStart, end: initialEnd } = useRefScrollProgress(initial)
  const scale = useTransform(
    scrollYProgress,
    [initialStart, initialEnd],
    [1, 0.7]
  )

  const open = useRef()
  const { start: openStart, end: openEnd } = useRefScrollProgress(open)
  const opacity = useTransform(
    scrollYProgress,
    [openStart, (openStart + openEnd) / 2, openEnd],
    [0, 0.3, 1]
  )
  const x = useTransform(
    scrollYProgress,
    [openStart, (openStart + openEnd) / 2, openEnd],
    ["0rem", "8rem", "12rem"]
  )

  const refs = []
  const proj = useRef()
  const proj1 = useRef()
  const proj2 = useRef()
  refs.push(proj, proj1, proj2)

  return (
    <>
      <Row className="m">
        <Col lg={12} className="mx-auto">
          <Heading>Featured Projects</Heading>
        </Col>
      </Row>
      <StyledLaptop ref={initial}>
        <motion.div
          style={{
            scale,
            x,
          }}
          className="mx-auto mb-3 pt-3"
        >
          <Laptop opacity={opacity} scrollYProgress={scrollYProgress} />
          {PROJECT_IMAGES.map((image, index) => {
            return (
              <motion.div
                style={{
                  opacity: ImageOpacity(refs[index]),
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <Image src={image} fluid />
              </motion.div>
            )
          })}
        </motion.div>
      </StyledLaptop>
      <Row style={{ height: "40vh", border: "5px solid green" }} ref={open} />
      <Row style={{ height: "60vh", border: "5px solid grey" }} />
      {refs.map((ref, index) => {
        return (
          <Row
            ref={ref}
            key={index}
            style={{ height: "120vh", border: "5px solid grey" }}
          />
        )
      })}
    </>
  )
}
