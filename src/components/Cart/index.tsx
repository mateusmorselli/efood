import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formataPreco } from '../Cardapio'
import { DadosCompra, DadosPagamento, PagamentoAprovado } from '../Card'
import { usePurchaseMutation } from '../../services/api'

import trash from '../../assets/images/trash.png'

export const Cart = () => {
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
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
        .max(20, 'Precisa ter 16 dígitos')
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

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {step === 'cart' && (
          <S.Carrinho>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} className="img-product" />
                      <S.ItemContainer>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                      </S.ItemContainer>
                      <img
                        src={trash}
                        className="trash-icon"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.ParagrafoValorTotal>
                  <span>Valor total:</span>
                  <span>{formataPreco(getTotalPrice())}</span>
                </S.ParagrafoValorTotal>
                <S.Button onClick={handleClick}>
                  Continuar com a entrega
                </S.Button>
              </>
            ) : (
              <p className="empty">
                Parece que você ainda não escolheu nada. Explore nosso menu e
                adicione seus favoritos!
              </p>
            )}
          </S.Carrinho>
        )}

        <form id="compra" onSubmit={form.handleSubmit}>
          {step === 'delivery' && (
            <S.Checkout>
              <DadosCompra>
                <>
                  <S.Row>
                    <S.InputGroup>
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
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
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
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
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
                    </S.InputGroup>
                  </S.Row>
                  <S.Row
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '34px'
                    }}
                  >
                    <S.InputGroup>
                      <label htmlFor="zipcode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={form.values.zipcode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipcode') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
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
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.ButtonsDiv>
                    <S.ButtonFinal
                      type="button"
                      onClick={() => setStep('payment')}
                    >
                      Continuar com o pagamento
                    </S.ButtonFinal>
                    <S.ButtonFinal
                      type="button"
                      onClick={() => setStep('cart')}
                    >
                      Voltar para o carrinho
                    </S.ButtonFinal>
                  </S.ButtonsDiv>
                </>
              </DadosCompra>
            </S.Checkout>
          )}

          {step === 'payment' && (
            <S.Payment>
              <>
                <DadosPagamento valor={formataPreco(getTotalPrice())}>
                  <>
                    <S.Row>
                      <S.InputGroup>
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
                      </S.InputGroup>
                    </S.Row>
                    <S.Row
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '30px'
                      }}
                    >
                      <S.InputGroup>
                        <label htmlFor="cardNum">Número do cartão</label>
                        <InputMask
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
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="code">CVV</label>
                        <InputMask
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
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '34px'
                      }}
                    >
                      <S.InputGroup>
                        <label htmlFor="month">Mês do vencimento</label>
                        <InputMask
                          type="text"
                          id="month"
                          name="month"
                          value={form.values.month}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('month') ? 'error' : ''}
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="year">Ano do vencimento</label>
                        <InputMask
                          type="text"
                          id="year"
                          name="year"
                          value={form.values.year}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('year') ? 'error' : ''}
                          mask="99"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.ButtonsDiv>
                      <S.ButtonFinal type="submit" disabled={isLoading}>
                        {isLoading ? 'Processando...' : 'Finalizar pagamento'}
                      </S.ButtonFinal>
                      <S.ButtonFinal
                        type="button"
                        onClick={() => setStep('delivery')}
                      >
                        Voltar para a edição do endereço
                      </S.ButtonFinal>
                    </S.ButtonsDiv>
                    {isError && (
                      <div style={{ color: 'red', marginTop: '10px' }}>
                        Ocorreu um erro ao processar seu pagamento. Por favor,
                        tente novamente.
                      </div>
                    )}
                  </>
                </DadosPagamento>
              </>
            </S.Payment>
          )}
        </form>

        {step === 'finish' && (
          <S.Finish>
            <PagamentoAprovado>
              <>
                <h1>Pedido realizado - {data.orderId} </h1>
                <S.Paragrafo>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. <br />
                </S.Paragrafo>
                <S.Paragrafo>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras <br />
                </S.Paragrafo>
                <S.Paragrafo>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br />
                </S.Paragrafo>
                <S.Paragrafo>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite! <br />
                </S.Paragrafo>
                <S.ButtonsDiv>
                  <S.ButtonFinal
                    onClick={() => {
                      setStep('cart')
                      closeCart()
                      form.resetForm()
                    }}
                  >
                    Concluir
                  </S.ButtonFinal>
                </S.ButtonsDiv>
              </>
            </PagamentoAprovado>
          </S.Finish>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
