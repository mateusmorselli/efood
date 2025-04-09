import Loader from '../Loader'
import { Restaurante } from '../Pages/Home'
import { BannerDiv } from './styles'

type Props = {
  restaurante: Restaurante
  isLoading?: boolean
}

export const Banner = ({ restaurante, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <BannerDiv>
        <img src={restaurante.capa} alt="" />
        <div className="text-container">
          <p>
            {restaurante.tipo.charAt(0).toUpperCase() +
              restaurante.tipo.slice(1)}
          </p>
          <h1>{restaurante.titulo}</h1>
        </div>
      </BannerDiv>
    </>
  )
}
