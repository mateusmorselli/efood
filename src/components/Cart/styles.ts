import styled from 'styled-components'
import { colors } from '../../styles'

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
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .empty {
    font-size: 16px;
    color: ${colors.cream};
    line-height: 22px;
    text-align: center;
  }

  p {
    font-weight: 700;
    font-size: 14px;
    color: ${colors.white};
    margin-top: 40px;
    margin-bottom: 16px;
  }
`

export const Carrinho = styled.div``

export const Checkout = styled.div``

export const Payment = styled.div``

export const Finish = styled.div``

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${colors.offwhite};
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  height: 100px;
  background-color: ${colors.offwhite};
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
    margin-top: -24px;
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

export const ParagrafoValorTotal = styled.p`
  display: flex;
  justify-content: space-between;
  span {
    color: ${colors.offwhite};
  }
`
export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`

export const ButtonFinal = styled.button`
  margin-bottom: 8px;
  border: none;
  background-color: ${colors.offwhite};
  height: 24px;
  font-size: 14px;
  font-weight: 700;
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
    display: block;
    font-weight: 700;
  }

  input {
    height: 32px;
    background-color: ${colors.offwhite};
    border: none;
    width: 100%;
    color: #4b4b4b;
    padding: 8px;

    &.error {
      border: 2px solid #ff0033;
      box-shadow: 0 0 8px 2px #ff0033;
      background-color: #ffe5e5;
    }
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export const Paragrafo = styled.span`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.offwhite};
`
