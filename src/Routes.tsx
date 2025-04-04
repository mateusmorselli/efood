import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Pages/Home'
import { Perfil } from './components/Pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
