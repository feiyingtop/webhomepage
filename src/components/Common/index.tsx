import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const MDivider = styled.div`
  width: calc(100% - 48px);
  height: 1px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
`

export const MobileView = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const BrowserView = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: block;
  }
`

export const TitleText = styled.span`
  font-family: URWDIN-Demi;
  font-size: 48px;
  color: ${theme.colors.primary};
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
  }
`
export const ParagraphText = styled.div`
  font-family: URWDIN-Regular, PingFangSC-Regular, PingFang SC;
  // font-family: ftb;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
  font-weight: 400;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
    line-height: 20px;
  }
`

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.primary};
  @media (max-width: 768px) {
    width: calc(100% - 48px);
    margin: 0 24px;
  }
`

export const ModalTitle = styled.div`
  height: 36px;
  font-size: 20px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #000621;
  line-height: 36px;
`
