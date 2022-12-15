import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as S from './styles'

export function Group() {
  return (
    <S.Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
    </S.Container>
  );
}

