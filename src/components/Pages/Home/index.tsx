import { Hero } from '../../Hero'
import { ProducsList } from '../../ProductsList'
import { Prato } from '../Perfil'
import { useGetRestauranteQuery } from '../../../services/api'
import Loader from '../../Loader'

export type Restaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Prato[]
}

export const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestauranteQuery()

  if (!restaurantes) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <ProducsList isLoading={isLoading} restaurante={restaurantes} />
    </>
  )
}
