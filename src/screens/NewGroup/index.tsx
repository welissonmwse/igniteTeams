import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import * as S from './styles'
import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup(){
  const [group, setGoup] = useState('')

  const { navigate } = useNavigation()

  async function handleNewGroup(){
    try {
      await groupCreate(group)
      navigate('players', { group })

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGoup}
        />
        <Button
          title="Criar"
          style={{marginTop: 20}}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  )
}
