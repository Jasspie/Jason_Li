import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"

const query = graphql`
  {
    allStrapiHome {
      nodes {
        profile {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
      }
    }
  }
`
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Background = styled(motion.div)`
  position: absolute;
  background: white;
  z-index: 5000;
  height: 100%;
`
const bg = {
  initial: {
    width: "100%",
  },
  animate: {
    width: "0%",
    transition: {
      delay: 4,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

const photo = {
  initial: {
    transform: "scale(1.6)",
  },
  animate: {
    transform: "scale(1.0)",
    transition: {
      delay: 3.7,
      duration: 1,
      ease: "easeInOut",
    },
  },
}

export default function Profile() {
  const {
    allStrapiHome: { nodes },
  } = useStaticQuery(query)

  const {
    profile: {
      localFile: {
        childImageSharp: { gatsbyImageData: image },
      },
    },
  } = nodes[0]

  return (
    <Wrapper>
      <Background variants={bg} initial="initial" animate="animate" />
      <motion.div variants={photo} initial="initial" animate="animate">
        <GatsbyImage image={image} alt="Profile Photo" />
      </motion.div>
    </Wrapper>
  )
}
