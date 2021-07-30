import React from "react"
import Navigation from "./Navigation"

export default function Layout({ children }) {
  if (typeof window != "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
