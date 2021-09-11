import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: Inter, sans-serif;
        transition: all 0.4s linear; 
        scroll-behavior: smooth;
    }
    ::selection {
        background-color: ${({ theme }) => theme.highlight};
        color: ${({ theme }) => theme.bw};
    }
`
