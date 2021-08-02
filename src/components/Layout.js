import React from "react"
import Navigation from "./Navigation"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../themes/GlobalStyles"
import { lightTheme, darkTheme } from "../themes/Themes"

export default function Layout({ children }) {
  if (typeof window != "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Navigation />
      {children}
    </ThemeProvider>
  )
}
