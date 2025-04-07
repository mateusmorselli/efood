import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerDiv = styled.div`
  position: relative;
  height: 280px;
  img {
    height: 280px;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .text-container {
    position: absolute;
    top: -6px;
    left: calc((100% - 1024px) / 2);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0;
    box-sizing: border-box;
    z-index: 1;
    h1,
    p {
      color: ${cores.branco};
    }
    h1 {
      margin-bottom: 48px;
      font-size: 32px;
      font-weight: 900;
      margin-bottom: -6px;
    }
    p {
      font-size: 32px;
      font-weight: 100;
    }
  }
`
