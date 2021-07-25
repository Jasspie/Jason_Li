import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  transition: 0.4s all ease;
  position: relative;
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.1rem;
    bottom: -0.25rem;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom right;
    }
  }
`

export default function Link({ children, other }) {
  return <StyledLink {...other}>{children}</StyledLink>
}
