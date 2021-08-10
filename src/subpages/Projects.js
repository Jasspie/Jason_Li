import React, { useRef, Fragment } from "react"
import { Row, Col, Image } from "react-bootstrap"
import { motion } from "framer-motion"
import styled from "styled-components"

import Heading from "../components/Heading"
import Laptop from "../components/projects/Laptop"
import CardProject from "../components/projects/CardProject"
import ImageTransform from "../components/projects/ImageTransform"
import CardTransform from "../components/projects/CardTransform"
import LaptopTransform from "../components/projects/LaptopTransform"
import { PROJECTS } from "../constants/Projects"

const StyledLaptop = styled(Row)`
  height: 90vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0rem;
`

export default function Projects() {
  const initial = useRef()
  const open = useRef()
  const exit = useRef()

  const { opacity, x, scale, disappear } = LaptopTransform(open, exit, initial)

  const proj = useRef()
  const proj1 = useRef()
  const proj2 = useRef()

  const refs = []
  refs.push(proj, proj1, proj2)

  return (
    <>
      <Row>
        <Col lg={12} className="mx-auto">
          <Heading>
            F e a t u r e d <span style={{ marginLeft: "2rem" }} />P r o j e c t
            s
          </Heading>
        </Col>
      </Row>
      <StyledLaptop ref={initial}>
        <motion.div
          style={{
            scale,
            x,
            opacity: disappear,
          }}
          className="mx-auto mb-3 pt-3"
        >
          <Laptop opacity={opacity} />
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                style={{
                  opacity: ImageTransform(refs[index]),
                  position: "absolute",
                  zIndex: 1000,
                }}
                key={index}
              >
                <Image src={project.image} fluid />
              </motion.div>
            )
          })}
        </motion.div>
      </StyledLaptop>
      <Row style={{ height: "40vh" }} ref={open} />
      <Row style={{ height: "40vh" }} />
      {PROJECTS.map((project, index) => {
        return (
          <Fragment key={index}>
            <Row ref={refs[index]} style={{ height: "120vh" }}>
              <Col lg={4} style={{ marginTop: "15vh" }}>
                <motion.div
                  className="shadow"
                  style={{
                    x: CardTransform(refs[index]),
                    opacity: ImageTransform(refs[index]),
                    marginRight: "4rem",
                    borderRadius: "40px",
                  }}
                >
                  <CardProject project={project} />
                </motion.div>
              </Col>
            </Row>
            <Row style={{ height: "20vh" }} />
          </Fragment>
        )
      })}
      <Row style={{ height: "40vh" }} ref={exit} />
      <Row className="USE IN VIEW" style={{ height: "30vh" }} />
    </>
  )
}
