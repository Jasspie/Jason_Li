import React from "react"
import styled from "styled-components"

const Header = styled.span`
  font-size: calc(2rem + 1.5vw);
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.name};
`
const Rectangle = styled.div`
  background-color: ${({ theme }) => theme.rectangle};
  height: 3px;
  width: 20vw;
  display: inline-block;
  margin-left: 2rem;
  margin-bottom: 1rem;
`

export default function Heading({ children, other }) {
  return (
    <div className="text-center">
      <Header {...other}>{children}</Header>
      <Rectangle />
    </div>
  )
}
