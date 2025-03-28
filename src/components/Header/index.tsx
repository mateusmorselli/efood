import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bground from '../../assets/images/Vector.png'
import { HeaderDiv, LinkItem, Links } from './style'

export const Header = () => (
  <HeaderDiv style={{ backgroundImage: `url(${bground})` }}>
    <nav>
      <Links>
        <LinkItem>Restaurente</LinkItem>
        <LinkItem>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LinkItem>
        <LinkItem>0 Produto(s)</LinkItem>
      </Links>
    </nav>
  </HeaderDiv>
)
