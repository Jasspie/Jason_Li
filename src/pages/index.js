import React from "react"
import { Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Home from "../subpages/Home"
import About from "../subpages/About"

export default function Index() {
  return (
    <Layout>
      <Container>
        <Row style={{ height: "110vh" }}>
          <Home />
        </Row>

        <About />
        {/* <Row style={{ textAlign: "center" }}>
          <Link to="/#test-scroll">Scroll To My Cool Header</Link>
        </Row>
        <Row style={{ height: "200vh" }} />
        <Row>
          <Hi />
        </Row> */}
        <Row style={{ height: "35vh" }} />
      </Container>
    </Layout>
  )
}
