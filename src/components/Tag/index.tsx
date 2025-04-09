import { TagContainer } from './styles'

export type Props = {
  page?: 'home' | 'perfil'
  estilo?: 'btn' | 'tag'
  children: string
  onClick?: () => void
}

const Tag = ({ children, estilo = 'tag', page = 'home' }: Props) => {
  const textoformatado =
    typeof children === 'string'
      ? children.charAt(0).toUpperCase() + children.slice(1).toLowerCase()
      : children
  return (
    <TagContainer page={page} estilo={estilo}>
      {textoformatado}
    </TagContainer>
  )
}

export default Tag
