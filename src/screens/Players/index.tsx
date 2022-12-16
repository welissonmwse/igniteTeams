import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useState } from 'react'
import { FlatList } from 'react-native'
import * as S from './styles'

export function Players(){
  const playersArray = ['Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F']
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(playersArray)

  return(
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={players}
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
    </S.Container>
  )
}
