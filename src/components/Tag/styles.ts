import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.a<Props>`
  cursor: pointer;
  padding: 8px;
  text-align: center;
  font-size: ${(props) => (props.estilo === 'tag' ? '12px' : '16px')};
  font-weight: 700;
  margin-left: ${(props) => (props.estilo === 'tag' ? '8px' : '0px')};
  background-color: ${(props) =>
    props.page === 'home' ? cores.laranja : cores.bgGeral};
  color: ${(props) => (props.page === 'home' ? cores.bgGeral : cores.laranja)};
  display: ${(props) => (props.page === 'home' ? 'inline-block' : 'block')};

  &::first-letter {
    text-transform: uppercase;
  }
`
