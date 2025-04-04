import styled from 'styled-components'

export const Containter = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
