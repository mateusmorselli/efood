import logo from '../../assets/images/logo.png'
import face from '../../assets/images/facebook.png'
import insta from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import * as S from './styles'

export const Footer = () => (
  <S.FooterBg>
    <S.DivFooter>
      <S.LogoDiv>
        <img src={logo} alt="EFOOD" />
      </S.LogoDiv>
      <S.LogoRedes>
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </S.LogoRedes>
      <S.Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega,
      </S.Paragrafo>
      <S.Paragrafo>
        qualidade dos produtos é toda do estabelecimento contratado.{' '}
      </S.Paragrafo>
    </S.DivFooter>
  </S.FooterBg>
)
