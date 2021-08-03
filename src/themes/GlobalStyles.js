import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: Source Sans Pro, sans-serif;
        transition: all 0.50s linear; 
    }
    // ::selection {
    //     background-color: ${({ theme }) => theme.name};
    //     color: ${({ theme }) => theme.background};
    // }
`
