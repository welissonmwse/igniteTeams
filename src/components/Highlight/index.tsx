import * as S from './styles'

type Props = {
  title: string
  subtitle: string
}

export function Highlight({title, subtitle}: Props){
  return(
    <S.Container>
      <S.Tite>{title}</S.Tite>
      <S.SubTite>{subtitle}</S.SubTite>
    </S.Container>
  )
}