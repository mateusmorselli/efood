import { useParams } from 'react-router-dom'
import { Header } from '../../Header'
import { CardapioRestaurante } from '../../Cardapio'
import {
  useGetCardapioQuery,
  useGetRestauranteByIdQuery
} from '../../../services/api'
import { Cart } from '../../Cart'
import Loader from '../../Loader'
import { Banner } from '../../Banner'

export type Prato = {
  id: number
  nome: string
  preco: number
  porcao: string
  descricao: string
  foto: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

export const Perfil = () => {
  const { id } = useParams()
  const { data: pratos } = useGetCardapioQuery(id!)
  const { data: restaurante } = useGetRestauranteByIdQuery(id!)

  if (!pratos || !restaurante) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <CardapioRestaurante cardapio={pratos} />
      <Cart />
    </>
  )
}
