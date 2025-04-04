import styled from 'styled-components'
import { cores } from '../../styles'

export const Containter = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};
  display: flex;
  .food {
    width: 280px;
    height: 280px;
    object-fit: cover;
    padding: 32px;
  }
  .fechar {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 8px;
    top: 8px;
  }
`

export const ModalInfos = styled.div`
  padding: 32px;
  margin-left: -40px;
  h2,
  p {
    color: ${cores.bgGeral};
  }
  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  a {
    background-color: ${cores.bgGeral};
    color: ${cores.laranja};
    padding: 4px 7px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
