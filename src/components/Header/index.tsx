import React from 'react'

import logoImg from '@assets/logo.png'

import * as S from './styles'

export function Header(){
  return(
    <S.Container>
      <S.Logo source={logoImg} />
    </S.Container>
  )
}