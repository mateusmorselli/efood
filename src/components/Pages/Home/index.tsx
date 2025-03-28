import sushi from '../../../assets/images/sushi.png'
import macarrao from '../../../assets/images/macarrao.png'
import { Hero } from '../../Hero'
import { ProducsList } from '../../ProductsList'
import Cardapio from '../../../models/Cardapio'

export const produtosHome: Cardapio[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    rate: '4.9',
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana'],
    rate: '4.7',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana'],
    rate: '4.7',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana'],
    rate: '4.7',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana'],
    rate: '4.7',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana'],
    rate: '4.7',
    title: 'La Dolce Vita Trattoria'
  }
]

export const Home = () => (
  <>
    <Hero />
    <ProducsList cardapioHome={produtosHome} />
  </>
)
