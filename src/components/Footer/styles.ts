import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBg = styled.footer`
  background-color: ${cores.rodapeBg};
  padding: 40px 0;
`

export const DivFooter = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoRedes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
  img {
    width: 24px;
    height: 24px;
  }
`

export const Paragrafo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
`
