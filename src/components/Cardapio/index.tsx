import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductsCart } from '../ProductsCart'
import { Containter, List, Modal, ModalContent, ModalInfos } from './styles'
import close from '../../assets/images/close.png'
import { Prato } from '../Pages/Perfil'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  cardapio: Prato[]
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const CardapioRestaurante = ({ cardapio }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (pratoSelecionado) {
      dispatch(add(pratoSelecionado))
      dispatch(open())
      setModalOn(false)
    }
  }

  const [modalOn, setModalOn] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  return (
    <>
      <Containter>
        <div className="container">
          <List>
            {cardapio.map((prato) => (
              <div
                key={prato.id}
                onClick={() => {
                  setPratoSelecionado(prato)
                  setModalOn(true)
                }}
              >
                <ProductsCart
                  description={prato.descricao}
                  image={prato.foto}
                  title={prato.nome}
                />
              </div>
            ))}
          </List>
        </div>
      </Containter>

      <Modal className={modalOn ? 'visivel' : ''}>
        {pratoSelecionado && (
          <ModalContent className="container">
            <div className="menu-item-container">
              <img className="food" src={pratoSelecionado.foto} alt="Produto" />
            </div>
            <ModalInfos>
              <h2>{pratoSelecionado.nome}</h2>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: de {pratoSelecionado.porcao}</p>
              <a onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
              </a>
            </ModalInfos>
            <img
              className="fechar"
              src={close}
              alt="Fechar"
              onClick={() => setModalOn(false)}
            />
          </ModalContent>
        )}
        <div className="overlay" onClick={() => setModalOn(false)}></div>
      </Modal>
    </>
  )
}
