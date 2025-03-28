import { Product } from '../Product'
import { Containter, List } from './styles'
import Cardapio from '../../models/Cardapio'

export type Props = {
  cardapioHome: Cardapio[]
}

export const ProducsList = ({ cardapioHome }: Props) => (
  <Containter>
    <div className="container">
      <List>
        {cardapioHome.map((cardapio) => (
          <Product
            key={cardapio.id}
            description={cardapio.description}
            image={cardapio.image}
            infos={cardapio.infos}
            rate={cardapio.rate}
            title={cardapio.title}
          />
        ))}
      </List>
    </div>
  </Containter>
)
