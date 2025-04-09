import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const HeaderDiv = styled.div`
  height: 184px;
  padding: 64px;
  width: 100%;
  margin: 0 auto;
  nav {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakPoints.desktop}) {
    padding: 64px 32px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: auto;
    padding: 32px 16px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const LinkItem = styled.li`
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 16px;
  }
`

export const CartButton = styled.a`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 16px;
    margin-top: 8px;
  }
`
