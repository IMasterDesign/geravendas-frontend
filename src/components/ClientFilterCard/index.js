import React from 'react';
import * as S from './styles';

import iconFilter from '../../assets/images/icons/white/filter.png';

function ClientCard({ name, actived }) {
  return (
    <S.Container actived={actived}>      
      <img src={iconFilter} alt=""/>
      <span>{name}</span>
    </S.Container>
  )
}

export default ClientCard;
