import { SquareLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <SquareLoader color={cores.laranja} />
  </Container>
)

export default Loader
