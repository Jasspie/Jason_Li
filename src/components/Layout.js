import React, { useState } from "react"
import Navigation from "./Navigation"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../themes/GlobalStyles"
import { lightTheme, darkTheme } from "../themes/Themes"
import { useDarkMode } from "../themes/useDarkMode"

export default function Layout({ children }) {
  const [theme, themeToggler] = useDarkMode()

  if (typeof window != "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} themeToggler={themeToggler} />
      {children}
    </ThemeProvider>
  )
}
