import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconTypeStyleProps } from './styles'
import * as S from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({type = 'primary', icon, ...props}: Props){
  return(
    <S.Container  {...props}>
      <S.Icon name={icon} type={type}/>
    </S.Container>
  )
}
