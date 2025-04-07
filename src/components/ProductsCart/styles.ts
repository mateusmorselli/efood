import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  cursor: pointer;
  background-color: ${cores.laranja};
  width: 320px;
  height: 338px;
  img {
    padding: 8px;
    height: 167px;
    width: 100%;
    object-fit: cover;
  }
`

export const Titulo = styled.div`
  padding-left: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  font-weight: 900;
  line-height: 19px;
  h2 {
    color: ${cores.bgGeral};
    white-space: nowrap;
  }
`
export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  color: ${cores.bgGeral};
  line-height: 22px;
`

export const MaisDetalhes = styled.div`
  padding: 0 8px;
  margin-top: -4px;
`
