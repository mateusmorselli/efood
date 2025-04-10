import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  h1,
  label {
    color: ${colors.offwhite};
  }

  h1 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const ContainerFinal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    color: ${colors.offwhite};
  }
`
