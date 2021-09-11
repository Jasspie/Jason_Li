import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"
import SocialMedia from "./SocialMedia"

const query = graphql`
  {
    allStrapiHome {
      nodes {
        Top
        Bottom
      }
    }
  }
`

const Id = styled.div`
  position: absolute;
  top: 0;
`
const Top = styled(motion.h1)`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-family: Inter, sans-serif;
  margin-bottom: 2rem;
`

const Bottom = styled(motion.h4)`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-family: Inter, sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const Svg = styled.div`
  padding-right: 50px;
  fill: ${({ theme }) => theme.name};
  stroke: ${({ theme }) => theme.name};
`

export default function Name() {
  // React.useEffect(() => {
  //   const logo = document.querySelectorAll("#logo path")
  //   for (let i = 0; i < logo.length; i++) {
  //     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
  //   }
  // })

  const {
    allStrapiHome: { nodes: info },
  } = useStaticQuery(query)

  const top = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const bottom = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.4,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const letters = {
    initial: custom => ({
      strokeDasharray: custom.length,
      strokeDashoffset: custom.length,
    }),
    animate: custom => ({
      strokeDashoffset: 0,
      transition: {
        delay: 0.4 + 0.15 * custom.index,
        duration: 1,
        ease: "easeInOut",
      },
    }),
  }

  const fill = {
    initial: {
      fillOpacity: 0,
    },
    animate: {
      fillOpacity: 1,
      transition: {
        delay: 2.7,
        ease: "easeInOut",
      },
    },
  }
  return (
    <>
      <Id id="home" />
      <Top variants={top} initial="initial" animate="animate">
        {info[0].Top}
      </Top>
      <Svg>
        <motion.svg
          variants={fill}
          initial="initial"
          animate="animate"
          id="logo"
          width="100%"
          height="60"
          viewBox="0 0 570 73"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 212.7, index: 1 }}
            time={1}
            d="M44.22 3.68999V50.24C44.22 56.7 42.3517 61.735 38.615 65.345C34.8783 68.8917 29.875 70.665 23.605 70.665C17.2717 70.665 12.1417 68.8283 8.215 65.155C4.35166 61.4817 2.42 56.3517 2.42 49.765H15.72C15.7833 52.615 16.4483 54.8317 17.715 56.415C19.045 57.9983 20.945 58.79 23.415 58.79C25.8217 58.79 27.6583 58.03 28.925 56.51C30.1917 54.99 30.825 52.9 30.825 50.24V3.68999H44.22Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 315.7, index: 2 }}
            d="M123.031 57.365H96.6214L92.2514 70H78.2864L102.131 3.59499H117.616L141.461 70H127.401L123.031 57.365ZM119.421 46.725L109.826 18.985L100.231 46.725H119.421Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 321.7, index: 3 }}
            d="M195.906 70.665C191.283 70.665 187.103 69.8733 183.366 68.29C179.693 66.7067 176.779 64.4267 174.626 61.45C172.473 58.4733 171.364 54.9583 171.301 50.905H185.551C185.741 53.6283 186.691 55.7817 188.401 57.365C190.174 58.9483 192.581 59.74 195.621 59.74C198.724 59.74 201.163 59.0117 202.936 57.555C204.709 56.035 205.596 54.0717 205.596 51.665C205.596 49.7017 204.994 48.0867 203.791 46.82C202.588 45.5533 201.068 44.5717 199.231 43.875C197.458 43.115 194.988 42.2917 191.821 41.405C187.514 40.1383 183.999 38.9033 181.276 37.7C178.616 36.4333 176.304 34.565 174.341 32.095C172.441 29.5617 171.491 26.205 171.491 22.025C171.491 18.0983 172.473 14.6783 174.436 11.765C176.399 8.85165 179.154 6.63499 182.701 5.11499C186.248 3.53166 190.301 2.73999 194.861 2.73999C201.701 2.73999 207.243 4.41833 211.486 7.77499C215.793 11.0683 218.168 15.6917 218.611 21.645H203.981C203.854 19.365 202.873 17.4967 201.036 16.04C199.263 14.52 196.888 13.76 193.911 13.76C191.314 13.76 189.224 14.425 187.641 15.755C186.121 17.085 185.361 19.0167 185.361 21.55C185.361 23.3233 185.931 24.8117 187.071 26.015C188.274 27.155 189.731 28.105 191.441 28.865C193.214 29.5617 195.684 30.385 198.851 31.335C203.158 32.6017 206.673 33.8683 209.396 35.135C212.119 36.4017 214.463 38.3017 216.426 40.835C218.389 43.3683 219.371 46.6933 219.371 50.81C219.371 54.3567 218.453 57.65 216.616 60.69C214.779 63.73 212.088 66.1683 208.541 68.005C204.994 69.7783 200.783 70.665 195.906 70.665Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 349.4, index: 4 }}
            d="M284.318 70.665C278.112 70.665 272.412 69.2083 267.218 66.295C262.025 63.3817 257.908 59.36 254.868 54.23C251.828 49.0367 250.308 43.1783 250.308 36.655C250.308 30.195 251.828 24.4 254.868 19.27C257.908 14.0767 262.025 10.0233 267.218 7.10999C272.412 4.19666 278.112 2.73999 284.318 2.73999C290.588 2.73999 296.288 4.19666 301.418 7.10999C306.612 10.0233 310.697 14.0767 313.673 19.27C316.713 24.4 318.233 30.195 318.233 36.655C318.233 43.1783 316.713 49.0367 313.673 54.23C310.697 59.36 306.612 63.3817 301.418 66.295C296.225 69.2083 290.525 70.665 284.318 70.665ZM284.318 58.79C288.308 58.79 291.823 57.9033 294.863 56.13C297.903 54.2933 300.278 51.6967 301.988 48.34C303.698 44.9833 304.553 41.0883 304.553 36.655C304.553 32.2217 303.698 28.3583 301.988 25.065C300.278 21.7083 297.903 19.1433 294.863 17.37C291.823 15.5967 288.308 14.71 284.318 14.71C280.328 14.71 276.782 15.5967 273.678 17.37C270.638 19.1433 268.263 21.7083 266.553 25.065C264.843 28.3583 263.988 32.2217 263.988 36.655C263.988 41.0883 264.843 44.9833 266.553 48.34C268.263 51.6967 270.638 54.2933 273.678 56.13C276.782 57.9033 280.328 58.79 284.318 58.79Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 386.3, index: 5 }}
            d="M407.48 70H394.18L364.065 24.495V70H350.765V3.59499H364.065L394.18 49.195V3.59499H407.48V70Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 202.9, index: 6 }}
            d="M501.834 59.455H523.684V70H488.533V3.68999H501.834V59.455Z"
            strokeWidth="3.5"
          />
          <motion.path
            variants={letters}
            initial="initial"
            animate="animate"
            custom={{ length: 159.2, index: 7 }}
            d="M568.074 3.68999V70H554.774V3.68999H568.074Z"
            strokeWidth="3.5"
          />
        </motion.svg>
      </Svg>
      <Bottom variants={bottom} initial="initial" animate="animate">
        {info[0].Bottom}
      </Bottom>
      <SocialMedia />
    </>
  )
}
