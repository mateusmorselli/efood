import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'

export const Containter = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 40px;
    margin-bottom: 80px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0 20px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 80%;
    margin: 0 auto;
    justify-items: center;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
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

  @media (max-width: ${breakPoints.tablet}) {
    padding: 20px;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 2;
  background-color: ${cores.laranja};
  display: flex;

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .food {
    width: 280px;
    height: 280px;
    object-fit: cover;
    padding: 32px;

    @media (max-width: ${breakPoints.tablet}) {
      width: 100%;
      height: auto;
      padding: 0;
    }
  }

  .fechar {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 8px;
    top: 8px;

    @media (max-width: ${breakPoints.tablet}) {
      width: 24px;
      height: 24px;
      right: 16px;
      top: 16px;
    }
  }
`

export const ModalInfos = styled.div`
  padding: 32px 16px 0 24px;
  margin-left: -40px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 24px 16px; /* Padding mais compacto */
    margin-left: 0; /* Removo margem negativa */
  }

  h2,
  p,
  span {
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
    line-height: 22px;
    width: 100%;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 32px;
    margin-bottom: 16px;
    line-height: 22px;
  }

  a {
    background-color: ${cores.rodapeBg};
    color: ${cores.laranja};
    padding: 4px 7px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;

    @media (max-width: ${breakPoints.tablet}) {
      padding: 8px 16px;
      display: block;
      text-align: center;
    }
  }
`
