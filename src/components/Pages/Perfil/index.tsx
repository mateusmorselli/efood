import { useParams } from 'react-router-dom'
import { Banner } from '../../Banner'
import { Header } from '../../Header'
import { CardapioRestaurante } from '../../Cardapio'

import { useGetCardapioQuery } from '../../../services/api'
import { Cart } from '../../Cart'

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

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: pratos } = useGetCardapioQuery(id!)

  if (!pratos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner />
      <CardapioRestaurante cardapio={pratos} />
      <Cart />
    </>
  )
}
