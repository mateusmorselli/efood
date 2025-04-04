import { Hero } from '../../Hero'
import { ProducsList } from '../../ProductsList'
import { Prato } from '../Perfil'
import { useGetRestauranteQuery } from '../../../services/api'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: restaurantes, isLoading } = useGetRestauranteQuery()

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <ProducsList restaurante={restaurantes} />
    </>
  )
}
