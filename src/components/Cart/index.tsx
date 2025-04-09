import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import {
  Button,
  ButtonFinal,
  ButtonsDiv,
  Carrinho,
  CartContainer,
  CartItem,
  Checkout,
  Finish,
  InputGroup,
  ItemContainer,
  Overlay,
  Paragrafo,
  ParagrafoValorTotal,
  Payment,
  Row,
  SideBar
} from './styles'

import trash from '../../assets/images/trash.png'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Cardapio'
import { DadosCompra, DadosPagamento, PagamentoAprovado } from '../Card'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'finish'>(
    'cart'
  )
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const handleClick = () => {
    if (items.length === 0) {
      navigate('/'), closeCart()
    } else {
      setStep('delivery')
    }
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipcode: '',
      number: '',
      complement: '',
      name: '',
      cardNum: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(10, 'O endereço precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipcode: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(14, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      name: Yup.string()
        .min(5, 'O nome no cartão precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNum: Yup.string()
        .min(16, 'Precisa ter 16 dígitos')
        .max(16, 'Precisa ter 16 dígitos')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'Precisa ter 3 dígitos')
        .max(3, 'Precisa ter 3 dígitos')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .min(2, 'Precisa ter 2 dígitos')
        .max(2, 'Precisa ter 2 dígitos')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(2, 'Precisa ter 2 dígitos')
        .max(2, 'Precisa ter 2 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        await purchase({
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.description,
              city: values.city,
              zipCode: values.zipcode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.name,
              number: values.cardNum,
              code: Number(values.code),
              expires: {
                month: Number(values.month),
                year: Number(values.year)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          }))
        }).unwrap()

        setStep('finish')
      } catch (error) {
        console.error('Erro na compra:', error)
      }
    }
  })

  const getTotalPrice = () => {
    return items.reduce((acumulator, currentItem) => {
      return (acumulator += currentItem.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {step === 'cart' && (
          <Carrinho>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} className="img-product" />
                      <ItemContainer>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                      </ItemContainer>
                      <img
                        src={trash}
                        className="trash-icon"
                        onClick={() => removeItem(item.id)}
                      />
                    </CartItem>
                  ))}
                </ul>
                <ParagrafoValorTotal>
                  <span>Valor total:</span>
                  <span>{formataPreco(getTotalPrice())}</span>
                </ParagrafoValorTotal>
                <Button onClick={handleClick}>Continuar com a entrega</Button>
              </>
            ) : (
              <p className="empty">
                Parece que você ainda não escolheu nada. Explore nosso menu e
                adicione seus favoritos!
              </p>
            )}
          </Carrinho>
        )}

        <form onSubmit={form.handleSubmit}>
          {step === 'delivery' && (
            <Checkout>
              <DadosCompra>
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        type="text"
                        id="receiver"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('receiver') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="description">Endereço</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('description') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </InputGroup>
                  </Row>
                  <Row
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '34px'
                    }}
                  >
                    <InputGroup>
                      <label htmlFor="zipcode">CEP</label>
                      <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={form.values.zipcode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipcode') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <ButtonsDiv>
                    <ButtonFinal
                      type="button"
                      onClick={() => setStep('payment')}
                    >
                      Continuar com o pagamento
                    </ButtonFinal>
                    <ButtonFinal type="button" onClick={() => setStep('cart')}>
                      Voltar para o carrinho
                    </ButtonFinal>
                  </ButtonsDiv>
                </>
              </DadosCompra>
            </Checkout>
          )}

          {step === 'payment' && (
            <Payment>
              <>
                <DadosPagamento valor={formataPreco(getTotalPrice())}>
                  <>
                    <Row>
                      <InputGroup>
                        <label htmlFor="name">Nome no cartão</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.values.name}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('name') ? 'error' : ''}
                        />
                      </InputGroup>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '30px'
                      }}
                    >
                      <InputGroup>
                        <label htmlFor="cardNum">Número do cartão</label>
                        <input
                          style={{ width: '228px' }}
                          type="text"
                          id="cardNum"
                          name="cardNum"
                          value={form.values.cardNum}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNum') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="code">CVV</label>
                        <input
                          style={{
                            width: '86px',
                            padding: '0 8px 0 0',
                            boxSizing: 'border-box'
                          }}
                          type="text"
                          id="code"
                          name="code"
                          value={form.values.code}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('code') ? 'error' : ''}
                        />
                      </InputGroup>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '34px'
                      }}
                    >
                      <InputGroup>
                        <label htmlFor="month">Mês do vencimento</label>
                        <input
                          type="text"
                          id="month"
                          name="month"
                          value={form.values.month}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('month') ? 'error' : ''}
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="year">Ano do vencimento</label>
                        <input
                          type="text"
                          id="year"
                          name="year"
                          value={form.values.year}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('year') ? 'error' : ''}
                        />
                      </InputGroup>
                    </Row>
                    <ButtonsDiv>
                      <ButtonFinal type="submit" disabled={isLoading}>
                        {isLoading ? 'Processando...' : 'Finalizar pagamento'}
                      </ButtonFinal>
                      <ButtonFinal
                        type="button"
                        onClick={() => setStep('delivery')}
                      >
                        Voltar para a edição do endereço
                      </ButtonFinal>
                    </ButtonsDiv>
                    {isError && (
                      <div style={{ color: 'red', marginTop: '10px' }}>
                        Ocorreu um erro ao processar seu pagamento. Por favor,
                        tente novamente.
                      </div>
                    )}
                  </>
                </DadosPagamento>
              </>
            </Payment>
          )}
        </form>

        {step === 'finish' && (
          <Finish>
            <PagamentoAprovado>
              <>
                <h1>Pedido realizado - {data.orderId} </h1>
                <Paragrafo>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. <br />
                </Paragrafo>
                <Paragrafo>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras <br />
                </Paragrafo>
                <Paragrafo>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br />
                </Paragrafo>
                <Paragrafo>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite! <br />
                </Paragrafo>
                <ButtonsDiv>
                  <ButtonFinal
                    onClick={() => {
                      setStep('cart')
                      closeCart()
                    }}
                  >
                    Concluir
                  </ButtonFinal>
                </ButtonsDiv>
              </>
            </PagamentoAprovado>
          </Finish>
        )}
      </SideBar>
    </CartContainer>
  )
}
