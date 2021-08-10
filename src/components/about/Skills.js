import React, { useState } from "react"
import { Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

const SkillsTitle = styled.h4`
  opacity: ${props => (props.active ? 1 : 0.5)};
  color: ${({ theme }) => theme.name};
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.3s linear;
  margin-bottom: calc(1rem + 2vw);
`

const SkillsName = styled.h6`
  color: ${({ theme }) => theme.name};
  cursor: pointer;
  font-weight: 700;
  text-align: center;
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
    x: -30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

export default function Skills({ skills }) {
  const [id, setIndex] = useState(0)
  return (
    <>
      <Row>
        <Col lg={{ span: 3, order: "first" }} xs={{ span: 12, order: "last" }}>
          <InView triggerOnce>
            {({ inView, ref, entry }) => {
              return skills.map((skill, index) => {
                return (
                  <motion.div
                    ref={ref}
                    variants={titles}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    key={index}
                  >
                    <SkillsTitle
                      className="mt-3"
                      active={skills[id].title === skill.title ? 1 : 0}
                      onClick={() => setIndex(index)}
                    >
                      {skill.title}
                    </SkillsTitle>
                  </motion.div>
                )
              })
            }}
          </InView>
        </Col>
        <Col lg={9} style={{ height: "60vh" }}>
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
                          <SkillsName className="mt-3">{skill.name}</SkillsName>
                        </motion.div>
                      )
                    }}
                  </InView>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </>
  )
}
