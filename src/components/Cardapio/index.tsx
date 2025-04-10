import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ProductsCart } from '../ProductsCart'
import { add, open } from '../../store/reducers/cart'
import { Prato } from '../Pages/Perfil'
import * as S from './styles'

import close from '../../assets/images/close.png'

export type Props = {
  menu: Prato[]
}

export const formataPreco = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const CardapioRestaurante = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (selectedPlate) {
      dispatch(add(selectedPlate))
      dispatch(open())
      setModalOn(false)
    }
  }

  const [modalOn, setModalOn] = useState(false)
  const [selectedPlate, setSelectedPlate] = useState<Prato | null>(null)

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {menu.map((plate) => (
              <div
                key={plate.id}
                onClick={() => {
                  setSelectedPlate(plate)
                  setModalOn(true)
                }}
              >
                <ProductsCart
                  description={plate.descricao}
                  image={plate.foto}
                  title={plate.nome}
                />
              </div>
            ))}
          </S.List>
        </div>
      </S.Container>

      <S.Modal className={modalOn ? 'visivel' : ''}>
        {selectedPlate && (
          <S.ModalContent className="container">
            <div className="menu-item-container">
              <img className="food" src={selectedPlate.foto} alt="Produto" />
            </div>
            <S.ModalInfos>
              <h2>{selectedPlate.nome}</h2>
              <p>{selectedPlate.descricao}</p>
              <span>Serve: {selectedPlate.porcao}</span>
              <a onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(selectedPlate.preco)}
              </a>
            </S.ModalInfos>
            <img
              className="fechar"
              src={close}
              alt="Fechar"
              onClick={() => setModalOn(false)}
            />
          </S.ModalContent>
        )}
        <div className="overlay" onClick={() => setModalOn(false)}></div>
      </S.Modal>
    </>
  )
}
