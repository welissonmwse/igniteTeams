import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'

import { groupsGetAll } from '@storage/group/groupsGetAll'

import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'

import * as S from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()

  function handleNewGroup(){
    navigate('new')
  }

  async function fetchGroups(){
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string){
    navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, [groups]))


  return (
    <S.Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message="Quetal cadastrar a primeira turma?" />}
      />
      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </S.Container>
  )
}

