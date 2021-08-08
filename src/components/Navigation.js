import React, { useEffect, useState } from "react"
import ThemeSwitch from "./ThemeSwitch"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { useLocation } from "@reach/router"
import styled from "styled-components"

const StyledNavbar = styled(Navbar)`
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-family: Source Sans Pro, sans-serif;
  background-color: ${({ theme }) => theme.background};
  z-index: 10000;
  transition: all 0.4s linear;
`

const StyledNavbarLink = styled(Nav.Link)`
  opacity: 0.4;
  font-weight: 600;
  color: ${({ theme }) => theme.text} !important;
  cursor: pointer;
  margin-left: 1.5rem;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
`

const StyledLogo = styled.svg`
  & > circle {
    stroke: ${({ theme }) => theme.name};
  }
  & > path {
    fill: ${({ theme }) => theme.name};
  }
`

export default function Navigation({ theme, themeToggler }) {
  const [scrollY, setScrollY] = useState(0)
  const [active, setActive] = useState(false)
  let location = useLocation()

  const handleScroll = () => {
    let scrollCur = window.pageYOffset
    if (scrollCur - scrollY > 10) {
      setScrollY(scrollCur)
      setActive(false)
    } else if (scrollY - scrollCur > 10) {
      setScrollY(scrollCur)
      setActive(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  useEffect(() => {
    const delay = ms => new Promise(res => setTimeout(res, ms))
    async function hideNav() {
      if (location.pathname === "/" || location.hash === "#home") {
        await delay(4000)
        setActive(true)
      } else {
        setActive(true)
      }
    }
    hideNav()
  }, [])

  return (
    <StyledNavbar expand="lg" fixed="top" show={active ? 1 : 0}>
      <Container>
        <Navbar.Brand href="#home">
          <StyledLogo
            width="50"
            height="50"
            viewBox="0 0 274 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="137"
              cy="137"
              r="133"
              fill="none"
              stroke="#AD94CD"
              strokeWidth="8"
            />
            <path
              d="M126.544 101.488V172.048C126.544 181.84 123.712 189.472 118.048 194.944C112.384 200.32 104.8 203.008 95.296 203.008C85.696 203.008 77.92 200.224 71.968 194.656C66.112 189.088 63.184 181.312 63.184 171.328H83.344C83.44 175.648 84.448 179.008 86.368 181.408C88.384 183.808 91.264 185.008 95.008 185.008C98.656 185.008 101.44 183.856 103.36 181.552C105.28 179.248 106.24 176.08 106.24 172.048V101.488H126.544ZM170.221 186.016H203.341V202H150.061V101.488H170.221V186.016Z"
              fill="#AD94CD"
            />
            <path
              d="M88.488 81.904L189 81.904V102.064L88.488 102.064V81.904Z"
              fill="#AD94CD"
            />
          </StyledLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavbarLink href="#about">About</StyledNavbarLink>
            <StyledNavbarLink href="#projects">Projects</StyledNavbarLink>
            <StyledNavbarLink href="#contact">Contact</StyledNavbarLink>
            <StyledNavbarLink href="#resume">Resume</StyledNavbarLink>
          </Nav>
          <Navbar.Brand>
            <ThemeSwitch theme={theme} themeToggler={themeToggler} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}
