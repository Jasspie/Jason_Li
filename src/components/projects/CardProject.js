import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const StyledCard = styled(Card)`
  min-height: 20vh;
  border-color: ${({ theme }) => theme.card};
  background-color: ${({ theme }) => theme.card};
  border-radius: 40px 0px 40px 0px;
  overflow: hidden;
  transition: all 0.4s linear;
  margin-top: 10vh;
`

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.bw};
  font-weight: 700;
  font-family: Poppins;
  //   text-align: center;
`

const StyledDesc = styled.h6`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-family: Source Sans Pro, sans-serif;
`

const Rectangle = styled.div`
  background-color: ${({ theme }) => theme.rectangle};
  height: 3px;
  width: 2.5rem;
  display: inline-block;
  margin-right: 0.5rem;
`

const RectangleBot = styled.div`
  background-color: ${({ theme }) => theme.rectangle};
  height: 3px;
  width: 100%
  margin-right: 0.5rem;
`

const Github = styled(FaGithub)`
  transition: 0.3s ease-out;
  &:hover {
    fill: ${({ theme }) => theme.bw};
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`

const Link = styled(FaExternalLinkAlt)`
  transition: 0.3s ease-out;
  &:hover {
    fill: ${({ theme }) => theme.bw};
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`

const StyledButton = styled.div`
  color: ${({ theme }) => theme.bw};
  border: 2px solid ${({ theme }) => theme.bw};
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.8;
  display: inline-block;
`

const value = {
  size: "calc(1rem + 1.2vw)",
  color: "#9A9A9A",
  style: {
    marginLeft: "1rem",
    maxHeight: "50px",
  },
}

export default function CardProject({ project }) {
  return (
    <StyledCard className="p-5">
      <StyledTitle className="mb-4">{project.title}</StyledTitle>
      <div className="mb-4">
        <IconContext.Provider value={value}>
          <Rectangle />
          <span>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Link />
              </a>
            )}
          </span>
        </IconContext.Provider>
      </div>
      {project.description && (
        <StyledDesc className="mb-4">{project.description}</StyledDesc>
      )}
      <RectangleBot className="mb-4" />
      <div>
        {project.stack &&
          project.stack.map((tech, index) => {
            return <StyledButton key={index}>{tech}</StyledButton>
          })}
      </div>
    </StyledCard>
  )
}
