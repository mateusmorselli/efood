import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import * as S from './style'

import logo from '../../assets/images/logo.png'
import bground from '../../assets/images/Vector.png'

export const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderDiv style={{ backgroundImage: `url(${bground})` }}>
      <nav>
        <S.Links>
          <S.LinkItem>Restaurante</S.LinkItem>
          <S.LinkItem>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </S.LinkItem>
          <S.CartButton onClick={openCart}>
            {items.length} Produto(s) no carrinho
          </S.CartButton>
        </S.Links>
      </nav>
    </S.HeaderDiv>
  )
}
