import React, { useState } from "react"
import { Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"
import { media } from "../../themes/Media"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { IconContext } from "react-icons"

const SkillsTitle = styled.h2`
  opacity: ${props => (props.active ? 1 : 0.2)};
  color: ${({ theme }) => theme.name};
  // cursor: pointer;
  font-weight: 700;
  font-family: Source Sans Pro, sans-serif;
  text-align: center;
  transition: opacity 0.3s linear;
`

const SkillsName = styled.h6`
  color: ${({ theme }) => theme.name};
  font-weight: 700;
  font-family: Source Sans Pro, sans-serif;
  font-size: 80%;
  text-align: center;
  @media ${media.md} {
    font-size: 100%;
  }
`

const StyledButton = styled(motion.div)`
  opacity: ${props => (props.active ? 1 : 0.2)};
  transition: opacity 0.3s linear;
  margin-bottom: calc(0.5rem + 2vw);
  // display: inline-block;
  // margin-right: 2rem;
  // margin-left: 2rem;
  // border-radius: 15px;
  // border: 2px solid ${({ theme }) => theme.name};
`
const StyledCol = styled(Col)`
  height: 42vh;
  @media ${media.md} {
    height: 70vh;
    max-height: 500px;
  }
`

const icons = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + 0.05 * custom,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
}

const titles = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
}

const value = {
  size: "calc(0.7rem + 1.2vw)",
  color: "#9A9A9A",
  style: {
    maxHeight: "50px",
    cursor: "pointer",
  },
}

export default function Skills({ skills }) {
  const [id, setIndex] = useState(0)
  return (
    <>
      <Row style={{ marginTop: "5vh" }}>
        <Col
          lg={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
          className="mx-auto"
        >
          <InView triggerOnce>
            {({ inView, ref, entry }) => {
              return skills.map((skill, index) => {
                if (skills[id].title === skill.title) {
                  return (
                    <StyledButton
                      ref={ref}
                      variants={titles}
                      initial="initial"
                      animate={inView ? "animate" : "initial"}
                      key={index}
                    >
                      <SkillsTitle
                        className="my-3"
                        active={skills[id].title === skill.title ? 1 : 0}
                        onClick={() => setIndex(index)}
                      >
                        {skill.title}
                      </SkillsTitle>
                    </StyledButton>
                  )
                } else return null
              })
            }}
          </InView>
        </Col>
        <IconContext.Provider value={value}>
          <Col
            lg={{ span: 1, order: 2 }}
            xs={{ span: 1, order: 3 }}
            className="my-auto"
          >
            {id > 0 && (
              <FaArrowLeft
                className="mb-5"
                style={{ float: "left" }}
                onClick={() => setIndex(id - 1)}
              />
            )}
          </Col>
          <StyledCol
            lg={{ span: 10, order: 3 }}
            xs={{ span: 12, order: 2 }}
            className="mx-auto"
          >
            <Row className="mb-3">
              {skills[id].tech.map((skill, index) => {
                return (
                  <Col lg={3} xs={3} className="p-3" key={skill.name}>
                    <InView triggerOnce>
                      {({ inView, ref, entry }) => {
                        return (
                          <motion.div
                            ref={ref}
                            variants={icons}
                            initial="initial"
                            animate={inView ? "animate" : "initial"}
                            custom={index}
                          >
                            <Image src={skill.logo} alt={skill.name} fluid />
                            <SkillsName className="mt-3">
                              {skill.name}
                            </SkillsName>
                          </motion.div>
                        )
                      }}
                    </InView>
                  </Col>
                )
              })}
            </Row>
          </StyledCol>
          <Col
            lg={{ span: 1, order: 4, offset: 0 }}
            xs={{ span: 1, order: 4, offset: 10 }}
            className="my-auto"
          >
            {id < skills.length - 1 && (
              <FaArrowRight
                className="mb-5"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => setIndex(id + 1)}
              />
            )}
          </Col>
        </IconContext.Provider>
      </Row>
    </>
  )
}
