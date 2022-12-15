import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.WHITE};
`