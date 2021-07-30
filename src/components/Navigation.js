import React, { useEffect, useState } from "react"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import Logo from "../assets/Logo.svg"

const StyledNavbar = styled(Navbar)`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s linear;
  font-family: Source Sans Pro, sans-serif;
  background-color: white;
  z-index: 10000;
`

const StyledNavbarLink = styled(Nav.Link)`
  opacity: 0.4;
  font-weight: 600;
  color: black !important;
  cursor: pointer;
  margin-left: 1.5rem;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`

export default function Navigation() {
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
        await delay(4200)
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
          <Image src={Logo} alt="Jason Li" style={{ height: 50 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavbarLink href="#about">About</StyledNavbarLink>
            <StyledNavbarLink href="#projects">Projects</StyledNavbarLink>
            <StyledNavbarLink href="#contact">Contact</StyledNavbarLink>
            <StyledNavbarLink href="#resume">Resume</StyledNavbarLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}
