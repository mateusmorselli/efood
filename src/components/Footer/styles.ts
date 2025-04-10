import styled from 'styled-components'
import { colors, breakPoints } from '../../styles'

export const FooterBg = styled.footer`
  background-color: ${colors.offwhite};
  padding: 40px 0;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 32px 0;
  }
`

export const DivFooter = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 0 8px;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakPoints.tablet}) {
    img {
      max-width: 80%;
    }
  }
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

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 24px;
    margin-bottom: 40px;
    gap: 12px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Paragrafo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 0 16px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 9px;
    line-height: 1.4;
  }
`
