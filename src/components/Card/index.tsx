import * as S from './styles'

type Props = {
  valor?: string
  orderid?: string
  children: JSX.Element
}

export const DadosCompra = ({ children }: Props) => {
  return (
    <S.Container>
      <h1>Entrega</h1>
      {children}
    </S.Container>
  )
}

export const DadosPagamento = ({ valor, children }: Props) => {
  return (
    <S.Container>
      <h1>Pagamento - Valor a pagar {valor}</h1>
      {children}
    </S.Container>
  )
}

export const PagamentoAprovado = ({ children }: Props) => (
  <S.ContainerFinal>{children}</S.ContainerFinal>
)
