import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.laranja};
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
  line-height: 22px;
`

export const SaibaMais = styled.div`
  padding: 0 8px 8px 8px;
  margin-top: auto;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Conteudo = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.laranja};
  border-top: none;
  padding: 0;
  position: relative;
`
