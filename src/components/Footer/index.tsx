import logo from '../../assets/images/logo.png'
import face from '../../assets/images/facebook.png'
import insta from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { LogoDiv, LogoRedes, Paragrafo, FooterBg, DivFooter } from './styles'

export const Footer = () => (
  <FooterBg>
    <DivFooter>
      <LogoDiv>
        <img src={logo} alt="EFOOD" />
      </LogoDiv>
      <LogoRedes>
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </LogoRedes>
      <Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega,
      </Paragrafo>
      <Paragrafo>
        qualidade dos produtos é toda do estabelecimento contratado.{' '}
      </Paragrafo>
    </DivFooter>
  </FooterBg>
)
