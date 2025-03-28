import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  laranja: '#E66767',
  rodapeBg: '#FFEBD9',
  bgGeral: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-seriff;
    color: ${cores.laranja};
    list-style: none;
  }

  body {
    background-color: ${cores.bgGeral};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
