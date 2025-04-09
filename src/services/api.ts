import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato } from '../components/Pages/Perfil'
import { Restaurante } from '../components/Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteById: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCardapio: builder.query<Prato[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: Restaurante) => response.cardapio || []
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestauranteQuery,
  useGetCardapioQuery,
  usePurchaseMutation,
  useGetRestauranteByIdQuery
} = api
export default api
