import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"

const About = styled.div`
  & > h5 {
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;
    & > a {
      color: ${({ theme }) => theme.name};
      transition: 0.4s all ease;
      position: relative;
      text-decoration: none;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 0.12rem;
        bottom: -0.08rem;
        left: 0;
        background-color: ${({ theme }) => theme.name};
        transform-origin: bottom left;
        transition: transform 0.15s ease-out;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        }
      }
    }
  }
`
// <a href="https://www.uwo.ca/" D>Western University</a>
// <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>

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
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <InView threshold={0.3} triggerOnce>
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
        components={{
          h5: ({ node, ...props }) => <AnimatedText {...props} />,
          a: ({ node, children, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      />
    </About>
  )
}
