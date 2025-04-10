import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  orange: '#E66767',
  offwhite: '#FFEBD9',
  cream: '#FFF8F2'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-seriff;
    color: ${colors.orange};
    list-style: none;
  }

  body {
    background-color: ${colors.cream};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
