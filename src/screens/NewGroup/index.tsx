import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import * as S from './styles'

export function NewGroup(){
  const [group, setGoup] = useState('')

  const { navigate } = useNavigation()

  async function handleNewGroup(){
    try {
      if(group.trim().length === 0){
        return Alert.alert('Novo Grupo', 'Informe o nome do Grupo')
      }

      await groupCreate(group)
      navigate('players', { group })

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Grupo', error.message)
        return
      }
      Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
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
