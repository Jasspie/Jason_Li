import React from "react"
import { Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import Home from "../subpages/Home"
import About from "../subpages/About"
import Projects from "../subpages/Projects"

export default function Index() {
  return (
    <Layout>
      <Container>
        <Row className="mb-5" style={{ minHeight: "100vh" }}>
          <Home />
        </Row>
        <Row>
          <About />
        </Row>
        <Row style={{ height: "15vh" }} />
        <Row>
          <Projects />
        </Row>
      </Container>
    </Layout>
  )
}
