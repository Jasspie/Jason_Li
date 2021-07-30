import React from "react"
import { Row, Col } from "react-bootstrap"
import Heading from "../components/Heading"

export default function About() {
  return (
    <>
      <Row>
        <Col lg={6} className="mx-auto">
          <Heading>About</Heading>
        </Col>
      </Row>
      <Row>
        <Col lg={5} className="m-auto"></Col>
        <Col lg={5} className="mx-auto"></Col>
      </Row>
    </>
  )
}
