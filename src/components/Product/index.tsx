import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Description, Titulo, SaibaMais, Infos } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rate: string
}

export const Product = ({ title, description, infos, image, rate }: Props) => (
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
      <Tag page="home" estilo="btn">
        Saiba mais
      </Tag>
    </SaibaMais>
  </Card>
)
