import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { PlayerAddByGroup } from '@storage/player/playerAddByGroup'
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'

import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ListEmpty } from '@components/ListEmpty'
import { PlayerCard } from '@components/PlayerCard'

import * as S from './styles'

type RouteParams = {
  group: string
}

export function Players(){
  const playersArray = ['Time A', 'Time B', 'Time C']
  const [team, setTeam] = useState(playersArray[0])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const { params } = useRoute()
  const { group } = params as RouteParams

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Novo Jogador', 'Informe o nome do jogador para adicionar.')
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await PlayerAddByGroup(newPlayer, group)
      fetchPlayersByTeam()
      console.log('aki')

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Jogador', error.message)
        return
      }
      console.log(error)
      Alert.alert('Novo Jogador', 'Não foi possível adicionar o jogador')
    }
  }

  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Jogador', 'Não foi possível carregar os jogadores do time selecionado')
    }
  }

  // useFocusEffect(useCallback(() => {
  //   fetchPlayersByTeam()
  // }, [team]))

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return(
    <S.Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={playersArray}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <S.NumersOfPlayers>{players.length}</S.NumersOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard
            name={item.name}
            onRemove={() => console.log('Removed')}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button
        title="Remover Turma"
        type="secondary"
      />
    </S.Container>
  )
}
