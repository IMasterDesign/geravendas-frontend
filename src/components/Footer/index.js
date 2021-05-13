import React from 'react';
import * as S from './styles';

import logo from '../../assets/images/logos/logo_white_footer.png';

function Footer() {
  return (
    <S.Container>
      <span><img src={logo} alt="" /></span>
      <span>{new Date().getFullYear()}</span>
    </S.Container>
  )
}

export default Footer;
