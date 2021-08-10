import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { media } from "../themes/Media"
import Name from "../components/home/Name"
import Profile from "../components/home/Profile"

const StyledName = styled(Col)`
  padding-top: 25vh;
  min-height: 100vh;
  @media ${media.md} {
    padding-top: 10vh;
    min-height: 0vh;
  }
`

const StyledProfile = styled(Col)`
  display: none;
  @media ${media.sm} {
    display: inline;
  }
`

export default function Home() {
  return (
    <>
      <Row>
        <StyledName lg={5} md={10} sm={10} xs={12} className="m-auto">
          <Name />
        </StyledName>
        <StyledProfile lg={5} md={10} sm={10} xs={12} className="m-auto py-5">
          <Profile />
        </StyledProfile>
      </Row>
    </>
  )
}
