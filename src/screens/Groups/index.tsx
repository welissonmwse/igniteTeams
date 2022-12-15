import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles'

export function Group() {
  const [groups, setGroups] = useState<string[]>(['Turma Ignite'])
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
          <GroupCard title={item}/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}

