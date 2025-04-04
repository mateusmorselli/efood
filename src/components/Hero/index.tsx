import logo from '../../assets/images/logo.png'
import bground from '../../assets/images/Vector.png'
import { HeroDiv } from './styles'

export const Hero = () => (
  <HeroDiv style={{ backgroundImage: `url(${bground})` }}>
    <div>
      <img src={logo} alt="Logo" />
      <h1>Viva experiências gastronômicas</h1>
      <h1>no conforto da sua casa</h1>
    </div>
  </HeroDiv>
)
