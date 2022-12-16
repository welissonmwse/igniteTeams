import React from 'react'
import { useNavigation } from '@react-navigation/native'

import logoImg from '@assets/logo.png'

import * as S from './styles'

type Props = {
  showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){
  const { navigate } = useNavigation()

  function handleGoBack(){
    navigate('groups')
  }

  return(
    <S.Container>
      {showBackButton &&
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      }
      <S.Logo source={logoImg} />
    </S.Container>
  )
}
