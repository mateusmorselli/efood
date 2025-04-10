import styled from 'styled-components'
import { colors, breakPoints } from '../../styles'

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
      color: ${colors.white};
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

  @media (max-width: ${breakPoints.desktop}) {
    .text-container {
      left: 0;
      padding: 24px;
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: 240px;
    img {
      height: 240px;
    }

    .text-container {
      padding: 16px;
      h1 {
        font-size: 24px;
        margin-bottom: 16px;
      }
      p {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 480px) {
    height: 180px;
    img {
      height: 180px;
    }

    .text-container {
      padding: 12px;
      h1 {
        font-size: 20px;
        margin-bottom: 12px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`
