import React, { useState } from "react"
import Navigation from "./Navigation"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../themes/GlobalStyles"
import { lightTheme, darkTheme } from "../themes/Themes"

export default function Layout({ children }) {
  const [theme, setTheme] = useState("dark")
  if (typeof window != "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} themeToggler={themeToggler} />
      {children}
    </ThemeProvider>
  )
}
