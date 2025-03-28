import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import bground from '../../assets/images/Vector.png'
import { HeroDiv } from './styles'

export const Hero = () => (
  <HeroDiv style={{ backgroundImage: `url(${bground})` }}>
    <div>
      <Link to="/perfil">
        <img src={logo} alt="Logo" />
      </Link>
      <h1>Viva experiências gastronômicas</h1>
      <h1>no conforto da sua casa</h1>
    </div>
  </HeroDiv>
)
