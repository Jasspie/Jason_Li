import React, { useState } from "react"
import { Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const SkillsTitle = styled.h4`
  opacity: ${props => (props.active ? 1 : 0.3)};
  color: ${({ theme }) => theme.name};
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.3s linear;
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
    y: -15,
  },
  animate: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + 0.1 * custom,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
}

export default function Skills({ skills }) {
  const [id, setIndex] = useState(0)
  return (
    <>
      <Row>
        <Col lg={3}>
          {skills &&
            skills.map((skill, index) => {
              return (
                <SkillsTitle
                  key={index}
                  className="my-5"
                  active={skills[id].title === skill.title ? 1 : 0}
                  onClick={() => setIndex(index)}
                >
                  {skill.title}
                </SkillsTitle>
              )
            })}
        </Col>
        <Col lg={9}>
          <Row>
            {skills[id].tech.map((skill, index) => {
              return (
                <Col lg={3} xs={3} className="p-3" key={skill.name}>
                  <AnimatePresence>
                    <motion.div
                      variants={icons}
                      initial="initial"
                      animate="animate"
                      exit={{ opacity: 0 }}
                      custom={index}
                    >
                      <Image src={skill.logo} alt={skill.name} fluid />
                      <SkillsName className="mt-3">{skill.name}</SkillsName>
                    </motion.div>
                  </AnimatePresence>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </>
  )
}
