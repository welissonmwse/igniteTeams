import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { ButtonTypeStyleProps } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'primary', ...props}: Props){
  return(
    <S.Container {...props} type={type}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}