import Tag from '../Tag'
import { Card, Description, MaisDetalhes, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const ProductsCart = ({ title, description, image }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt="{title}" />
      <Titulo>
        <h2>{title}</h2>
      </Titulo>
      <Description>{getDescricao(description)}</Description>
      <MaisDetalhes>
        <Tag page="perfil" estilo="btn">
          Mais detalhes
        </Tag>
      </MaisDetalhes>
    </Card>
  )
}
