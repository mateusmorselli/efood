import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  border: 1px solid ${cores.laranja};
  position: relative;
  img {
    width: 472px;
    height: 217px;
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
`
export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
`

export const SaibaMais = styled.div`
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
