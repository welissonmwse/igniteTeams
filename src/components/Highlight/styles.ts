import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Tite = styled.Text`
  text-align: center;
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`

export const SubTite = styled.Text`
  text-align: center;
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`
