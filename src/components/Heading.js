import React from "react"
import styled from "styled-components"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { media } from "../themes/Media"

const Header = styled.span`
  font-size: calc(2rem + 1.5vw);
  font-family: Poppins;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.name};
`
const Rectangle = styled(motion.div)`
  display: none;
  @media ${media.lg} {
    background-color: ${({ theme }) => theme.rectangle};
    height: 3px;
    display: inline-block;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`

const header = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
}

const rectangle = {
  initial: {
    width: "0rem",
  },
  animate: {
    width: "8rem",
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export default function Heading({ children, other }) {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ inView, ref, entry }) => {
        return (
          <motion.div
            className="text-center"
            ref={ref}
            variants={header}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <Header {...other}>{children}</Header>
            <Rectangle
              ref={ref}
              variants={rectangle}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            />
          </motion.div>
        )
      }}
    </InView>
  )
}
