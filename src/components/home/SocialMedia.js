import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Rectangle = styled(motion.div)`
  background-color: ${({ theme }) => theme.rectangle};
  height: 3px;
  display: inline-block;
  margin-right: 1rem;
`
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
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 3.8,
    },
  },
}

const rectangleVariants = {
  initial: {
    width: "0rem",
  },
  animate: {
    width: "4rem",
    transition: {
      duration: 0.7,
      delay: 3.8,
    },
  },
}
const value = {
  size: "calc(1rem + 1.5vw)",
  color: "#9A9A9A",
  style: {
    marginLeft: "1rem",
    maxHeight: "50px",
  },
}

const Icons = [
  {
    name: "Email",
    component: <Email />,
    url: "mailto:lijason02@hotmail.com",
  },
  {
    name: "Linkedin",
    component: <Linkedin />,
    url: "https://www.linkedin.com/in/lijason02/",
  },
  {
    name: "Github",
    component: <Github />,
    url: "https://github.com/Jasspie",
  },
  {
    name: "Instagram",
    component: <Instagram />,
    url: "https://www.instagram.com/jass.li/",
  },
]

export default function SocialMedia() {
  return (
    <div>
      <IconContext.Provider value={value}>
        <Rectangle
          variants={rectangleVariants}
          initial="initial"
          animate="animate"
        />
        {Icons.map(icon => {
          return (
            <motion.a
              variants={iconVariants}
              initial="initial"
              animate="animate"
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.component}
            </motion.a>
          )
        })}
      </IconContext.Provider>
    </div>
  )
}
