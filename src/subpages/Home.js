import React from "react"
import { Row, Col } from "react-bootstrap"
import Name from "../components/Name"
import Profile from "../components/Profile"

export default function Home() {
  return (
    <>
      <Row>
        <Col
          lg={5}
          className="m-auto"
          // style={{ border: "5px solid black", paddingBottom: "300px" }}
        >
          <Name />
        </Col>
        <Col lg={5} className="m-auto py-5">
          <Profile />
        </Col>
      </Row>
    </>
  )
}
