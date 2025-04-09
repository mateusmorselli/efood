import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const HeroDiv = styled.header`
  padding: 40px 0px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    img {
      margin-bottom: 138px;
    }

    h1 {
      font-size: 36px;
      font-weight: 900;

      @media (max-width: ${breakPoints.tablet}) {
        font-size: 24px;
      }
    }
  }
`
