import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts[2]};
    }
`