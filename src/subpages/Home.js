import React from "react"
import { Row, Col } from "react-bootstrap"
import Name from "../components/Name"
import Profile from "../components/Profile"

export default function Home() {
  return (
    <>
      <Row>
        <Col lg={5} className="m-auto">
          <Name />
        </Col>
        <Col lg={5} className="m-auto">
          <Profile />
        </Col>
      </Row>
    </>
  )
}
