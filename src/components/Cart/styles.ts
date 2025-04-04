import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 14px;
    color: ${cores.branco};
    margin-top: 40px;
    margin-bottom: 16px;
  }

  ${TagContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  height: 100px;
  background-color: ${cores.branco};
  margin-bottom: 16px;

  .img-product {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  .trash-icon {
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 9px;
  }

  img {
    height: 16px;
    width: 16px;
    align-self: flex-end;
  }
`
