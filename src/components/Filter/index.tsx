import { TouchableOpacityProps } from 'react-native'
import { FilterStyleProps } from './styles'
import * as S from './styles'

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function Filter({title, isActive = false, ...props}: Props){
  return(
    <S.Container isActive={isActive} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
