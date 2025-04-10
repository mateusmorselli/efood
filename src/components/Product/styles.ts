import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  width: 472px;
  height: 398px;
  border: 1px solid ${colors.orange};
  border-top: none;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  img {
    display: flex;
    object-fit: cover;
    width: 472px;
    height: 217px;
    margin-left: -1px;
    margin-right: -1px;
  }

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
    max-width: 472px;
    img {
      width: 100%;
      max-width: 472px;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: auto;
    img {
      height: 180px;
    }
  }
`

export const Titulo = styled.div`
  padding: 7px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  span {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 21px;
      height: 21px;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const SaibaMais = styled.div`
  padding: 0 8px 8px 8px;
  margin-top: auto;

  @media (max-width: ${breakPoints.tablet}) {
    padding-bottom: 16px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    top: 8px;
    right: 8px;
  }
`

export const Conteudo = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.orange};
  border-top: none;
  padding: 0;
  position: relative;

  @media (max-width: ${breakPoints.tablet}) {
    border-width: 1px;
  }
`
