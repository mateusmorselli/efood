import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.button<Props>`
  border: none;
  padding: 8px;
  text-align: center;
  height: ${(props) => (props.estilo === 'tag' ? '26px' : '24px')};
  font-size: ${(props) => (props.estilo === 'tag' ? '12px' : '16px')};
  font-weight: bold;
  margin-left: ${(props) => (props.estilo === 'tag' ? '8px' : '0px')};
  background-color: ${(props) =>
    props.page === 'home' ? cores.laranja : cores.rodapeBg};
  color: ${(props) => (props.page === 'home' ? cores.bgGeral : cores.laranja)};
  display: ${(props) => (props.page === 'home' ? 'inline-flex' : 'flex')};
  align-items: center;
  width: ${(props) => (props.page === 'home' ? '' : '100%')};
  justify-content: center;
  position: relative;
`
