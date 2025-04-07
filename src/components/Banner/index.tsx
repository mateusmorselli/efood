import banner from '../../assets/images/banner.png'
import { BannerDiv } from './styles'

export const Banner = () => {
  return (
    <>
      <BannerDiv>
        <img src={banner} alt="" />
        <div className="text-container">
          <p>Italiana</p>
          <h1>La Dolce Vita Trattoria</h1>
        </div>
      </BannerDiv>
    </>
  )
}
