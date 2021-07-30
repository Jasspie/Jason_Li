import React from "react"
import styled from "styled-components"

const Header = styled.span`
  font-size: 350%;
  text-align: center;
  font-weight: 500;
  color: #ad94cd;
`
const Rectangle = styled.div`
  background-color: #9a9a9a;
  height: 3px;
  width: 300px;
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
