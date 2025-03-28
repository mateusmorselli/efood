import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Footer } from './components/Footer'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
