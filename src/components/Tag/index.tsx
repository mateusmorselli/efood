import { TagContainer } from './styles'

export type Props = {
  page?: 'home' | 'perfil'
  estilo?: 'btn' | 'tag'
  children: string
}

const Tag = ({ children, estilo = 'tag', page = 'home' }: Props) => (
  <TagContainer page={page} estilo={estilo}>
    {children}
  </TagContainer>
)

export default Tag
