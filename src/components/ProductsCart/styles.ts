import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  cursor: pointer;
  background-color: ${cores.laranja};
  width: 320px;
  border: 1px solid ${cores.laranja};
  img {
    padding: 8px;
    width: 100%;
    height: 167px;
    width: 304px;
    object-fit: cover;
  }
`

export const Titulo = styled.div`
  padding-left: 8px;
  font-size: 16px;
  font-weight: 900;
  h2 {
    color: ${cores.bgGeral};
  }
`
export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${cores.bgGeral};
`
