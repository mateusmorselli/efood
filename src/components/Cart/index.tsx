import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  ItemContainer,
  Overlay,
  SideBar
} from './styles'

import trash from '../../assets/images/trash.png'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Cardapio'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} className="img-product" />
              <ItemContainer>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </ItemContainer>
              <img
                src={trash}
                className="trash-icon"
                onClick={() => removeItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <p>Valor total: {formataPreco(getTotalPrice())} </p>
        <Tag page="perfil" estilo="btn">
          Continuar com a entrega
        </Tag>
      </SideBar>
    </CartContainer>
  )
}
