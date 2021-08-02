import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const About = styled.div`
  & > h5 {
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-family: Source Sans Pro, sans-serif;
    margin-bottom: 2rem;
  }
`

export default function AboutInfo({ about }) {
  return (
    <About>
      <ReactMarkdown>{about}</ReactMarkdown>
    </About>
  )
}
