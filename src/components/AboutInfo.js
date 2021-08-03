import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"

const About = styled.div`
  & > h5 {
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-family: Source Sans Pro, sans-serif;
    margin-bottom: 2rem;
  }
`

function AnimatedText({ children, other }) {
  const text = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <InView threshold={0.5} triggerOnce>
      {({ inView, ref, entry }) => {
        return (
          <motion.h5
            ref={ref}
            {...other}
            variants={text}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            {children}
          </motion.h5>
        )
      }}
    </InView>
  )
}

export default function AboutInfo({ about }) {
  return (
    <About>
      <Markdown
        children={about}
        components={{ h5: ({ node, ...props }) => <AnimatedText {...props} /> }}
      />
    </About>
  )
}
