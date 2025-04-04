import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bground from '../../assets/images/Vector.png'
import { CartButton, HeaderDiv, LinkItem, Links } from './style'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderDiv style={{ backgroundImage: `url(${bground})` }}>
      <nav>
        <Links>
          <LinkItem>Restaurente</LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </LinkItem>
          <CartButton onClick={openCart}>{items.length} Produto(s)</CartButton>
        </Links>
      </nav>
    </HeaderDiv>
  )
}
