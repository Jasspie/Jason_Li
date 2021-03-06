import React, { useRef, Fragment } from "react"
import { Row, Col, Image } from "react-bootstrap"
import { motion } from "framer-motion"
import styled from "styled-components"
import { InView } from "react-intersection-observer"
import { media } from "../themes/Media"
import Heading from "../components/Heading"
import Laptop from "../components/projects/Laptop"
import CardProject from "../components/projects/CardProject"
import ImageTransform from "../components/projects/ImageTransform"
import CardTransform from "../components/projects/CardTransform"
import LaptopTransform from "../components/projects/LaptopTransform"
import { PROJECTS } from "../constants/Projects"

const StyledLaptop = styled(Row)`
  display: none;
  @media ${media.md} {
    display: flex;
    height: 90vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
  }
`
const StyledProjects = styled(Row)`
  display: none;
  @media ${media.md} {
    display: flex;
  }
`
const StyledProjectsMobile = styled(Row)`
  display: flex;
  @media ${media.md} {
    display: none;
  }
`

const StyledRow = styled(Row)`
  height: 0vh;
  @media ${media.md} {
    height: 40vh;
  }
`

const StyledCard = styled(motion.div)`
  border-radius: 40px;
  @media ${media.md} {
    margin-right: 4rem;
  }
`

const StyledDiv = styled.div`
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
`

const cards = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export default function Projects() {
  const initial = useRef()
  const open = useRef()
  const exit = useRef()

  const { opacity, x, scale, disappear } = LaptopTransform(open, exit, initial)

  const proj = useRef()
  const proj1 = useRef()
  const proj2 = useRef()
  const proj3 = useRef()
  const proj4 = useRef()

  const refs = []
  refs.push(proj, proj1, proj2, proj3, proj4)

  return (
    <>
      <Row id="projects">
        <Row style={{ height: "10vh" }} />
        <Col lg={12} className="mx-auto">
          <Heading>
            <StyledDiv>F e a t u r e d</StyledDiv>
            <StyledDiv>P r o j e c t s</StyledDiv>
          </Heading>
        </Col>
      </Row>
      <StyledProjects>
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
        <StyledRow ref={open} />
        <StyledRow />
        {PROJECTS.map((project, index) => {
          return (
            <Fragment key={index}>
              <Row ref={refs[index]} style={{ height: "120vh" }}>
                <Col lg={4} xs={12}>
                  <StyledCard
                    className="shadow"
                    style={{
                      x: CardTransform(refs[index]),
                      opacity: ImageTransform(refs[index]),
                    }}
                  >
                    <CardProject project={project} />
                  </StyledCard>
                </Col>
              </Row>
              <Row style={{ height: "20vh" }} />
            </Fragment>
          )
        })}
        <StyledRow ref={exit} />
      </StyledProjects>
      <StyledProjectsMobile>
        {PROJECTS.map((project, index) => {
          return (
            <InView triggerOnce threshold={0.5} key={index}>
              {({ inView, ref, entry }) => (
                <motion.div
                  ref={ref}
                  variants={cards}
                  initial="initial"
                  animate={inView ? "animate" : "initial"}
                >
                  <CardProject project={project} className="ml-5" />
                </motion.div>
              )}
            </InView>
          )
        })}
      </StyledProjectsMobile>
      <Row style={{ height: "30vh" }} />
    </>
  )
}
