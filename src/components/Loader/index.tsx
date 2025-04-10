import { SquareLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <SquareLoader color={colors.orange} />
  </Container>
)

export default Loader
