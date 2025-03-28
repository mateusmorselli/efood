import { ProductsCart } from '../ProductsCart'
import { Containter, List } from './styles'
import Cart from '../../models/Cart'

export type Props = {
  cardapioPerfil: Cart[]
}

export const ProducsListCart = ({ cardapioPerfil }: Props) => (
  <Containter>
    <div className="container">
      <List>
        {cardapioPerfil.map((cardapio) => (
          <ProductsCart
            key={cardapio.id}
            description={cardapio.description}
            image={cardapio.image}
            title={cardapio.title}
          />
        ))}
      </List>
    </div>
  </Containter>
)
