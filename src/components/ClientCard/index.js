import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './styles';

//import typeGenre from '../../utils/typeGenre';
import iconFemale from '../../assets/images/icons/yellow/icon_femalevenus.png';
import iconMale from '../../assets/images/icons/yellow/icon_malemars.png';

function ClientCard({name, sexy, birthday, status}) {
  const birth_day = useMemo(() => format(new Date(birthday), 'dd/MM/yyyy') );

  return (
    <S.Container status={status}>
      <S.TopCard>
        <img src={sexy == "F" ? iconFemale : iconMale} alt=""/>
        <h3>{name}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{birth_day}</strong>
        <span>{status ? 'Ativo' : 'Inativo'}</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default ClientCard;
