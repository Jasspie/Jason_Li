import React, { useEffect } from "react"
import Navigation from "./Navigation"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../themes/GlobalStyles"
import { lightTheme, darkTheme } from "../themes/Themes"
import { useDarkMode } from "../hooks/useDarkMode"
import { useLocation } from "@reach/router"

export default function Layout({ children }) {
  let location = useLocation()
  useEffect(() => {
    const hashes = ["home", "about", "projects", "contact"]
    if (
      hashes.includes(location.hash.substring(1)) &&
      location.pathname === "/"
    ) {
      const element = document.getElementById(location.hash.substring(1))
      element.scrollIntoView()
      element.focus()
    }
  }, [location.hash, location.pathname])

  const [theme, themeToggler] = useDarkMode()

  // if (typeof window != "undefined") {
  //   require("smooth-scroll")('a[href*="#"]')
  // }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} themeToggler={themeToggler} />
      {children}
    </ThemeProvider>
  )
}
