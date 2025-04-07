import { Restaurante } from '../Pages/Home'
import { Product } from '../Product'
import { Containter, List } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

export const ProducsList = ({ restaurante }: Props) => {
  const getRestaurantTags = (restauran: Restaurante) => {
    const tags = []

    if (restauran.destacado) {
      tags.push('Destaque da semana')
    }

    tags.push(restauran.tipo)

    return tags
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Containter>
      <div className="container">
        <List>
          {restaurante.map((restaurant) => (
            <Product
              key={restaurant.id}
              description={getDescricao(restaurant.descricao)}
              image={restaurant.capa}
              infos={getRestaurantTags(restaurant)}
              rate={restaurant.avaliacao}
              title={restaurant.titulo}
              id={restaurant.id}
            />
          ))}
        </List>
      </div>
    </Containter>
  )
}
