import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const StyledMessage = styled.h1`
  color: ${({ theme }) => theme.text} !important;
  text-align: center;
  margin-top: 0.5rem;
`
const StyledNumber = styled.h1`
  color: ${({ theme }) => theme.name};
  text-align: center;
  margin-top: 10vh;
  font-size: 20rem;
`

const StyledButton = styled.div`
  color: ${({ theme }) => theme.bw};
  border: 2px solid ${({ theme }) => theme.bw};
  border-radius: 5px;
  padding: 1rem 2rem 1rem 2rem;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
  font-size: 3rem;
  cursor: pointer;
  display: inline-block;
  margin: 2rem auto;
  width: 20%;
`

export default function Error() {
  return (
    <Layout>
      <StyledNumber>404</StyledNumber>
      <StyledMessage>Page Not Found</StyledMessage>
      <StyledButton
        onClick={() => window.open("/")}
        className="d-flex justify-content-center"
      >
        Go Home
      </StyledButton>
    </Layout>
  )
}
