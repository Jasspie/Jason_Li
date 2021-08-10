import React from "react"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { Col } from "react-bootstrap"
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Instagram = styled(FaInstagram)`
  transition: 0.3s ease-out;
  &:hover {
    fill: #dc2a7c;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`
const Github = styled(FaGithub)`
  transition: 0.3s ease-out;
  &:hover {
    fill: ${({ theme }) => theme.bw};
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`
const Linkedin = styled(FaLinkedin)`
  transition: 0.3s ease-out;
  &:hover {
    fill: #0a66c2;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`

const Email = styled(FaEnvelope)`
  transition: 0.3s ease-out;
  &:hover {
    fill: #d93025;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`

const iconVariants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + 0.1 * custom,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
}

const value = {
  size: "calc(2rem + 1.5vw)",
  color: "#9A9A9A",
  style: {
    maxHeight: "75px",
  },
}

const Icons = [
  {
    name: "Instagram",
    component: <Instagram />,
    url: "https://instagram.com",
  },
  {
    name: "Github",
    component: <Github />,
    url: "https://github.com",
  },
  {
    name: "Linkedin",
    component: <Linkedin />,
    url: "https://linkedin.com",
  },
  {
    name: "Email",
    component: <Email />,
    url: "https://gmail.com",
  },
]

export default function SocialMedia() {
  return (
    <>
      <Col lg={4} xs={2} />
      {Icons.map((icon, index) => {
        return (
          <Col key={icon.name} lg={1} xs={2}>
            <InView triggerOnce>
              {({ inView, ref, entry }) => {
                return (
                  <a
                    ref={ref}
                    key={icon.name}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconContext.Provider value={value}>
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        custom={index}
                      >
                        {icon.component}
                      </motion.div>
                    </IconContext.Provider>
                  </a>
                )
              }}
            </InView>
          </Col>
        )
      })}
      <Col lg={4} xs={2} />
    </>
  )
}
