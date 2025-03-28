import { SaibaMais } from '../Product/styles'
import Tag from '../Tag'
import { Card, Description, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const ProductsCart = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt="{title}" />
    <Titulo>
      <h2>{title}</h2>
    </Titulo>
    <Description>{description}</Description>
    <SaibaMais>
      <Tag page="perfil" estilo="btn">
        Adicionar ao carrinho
      </Tag>
    </SaibaMais>
  </Card>
)
