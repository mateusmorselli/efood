import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Description, Titulo, SaibaMais, Infos } from './styles'

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  rate: string
}

export const Product = ({
  id,
  title,
  description,
  infos,
  image,
  rate
}: Props) => (
  <Card>
    <img src={image} alt="{title}" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info} estilo="tag">
          {info}
        </Tag>
      ))}
    </Infos>
    <Titulo>
      <h2>{title}</h2>
      <span>
        {rate} <img src={estrela} alt="" />
      </span>
    </Titulo>
    <Description>{description}</Description>
    <SaibaMais>
      <Link to={`/perfil/${id}`}>
        <Tag page="home" estilo="btn">
          Saiba mais
        </Tag>
      </Link>
    </SaibaMais>
  </Card>
)
