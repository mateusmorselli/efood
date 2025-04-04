import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato } from '../components/Pages/Perfil'
import { Restaurante } from '../components/Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante[], void>({
      query: () => ''
    }),
    getCardapio: builder.query<Prato[], string>({
      query: (id) => `/${id}`,
      transformResponse: (response: Restaurante) => response.cardapio || []
    })
  })
})

export const { useGetRestauranteQuery, useGetCardapioQuery } = api
export default api
