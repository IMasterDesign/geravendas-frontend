import React, {useEffect, useState} from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logos/logo_white_header.png';
import bell from '../../assets/images/icons/blue/icon_bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  })

  async function Logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }


  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="" />
      </S.LeftSide>
      <S.RightSide>
      <Link to="/">Home</Link>
        <span className="dividir" />
        <Link to="/task">Nova Tarefa</Link>
        <span className="dividir" />
        <Link to="/home/client">Clientes</Link>
        <span className="dividir" />
        <Link to="/client/">Novo Cliente</Link>
        <span className="dividir" />
        <Link to="/product/">Novo Produto</Link>
        <span className="dividir" />
        <Link to="/productcategory/">Nova Categoria</Link>
        <span className="dividir" />
        { !isConnected ?
          <Link to="/qrcode">Sincronizar Celular</Link>
          :
          <button type="button" onClick={Logout}>Sair</button>
        }
        {
          lateCount &&
          <>            
            <span className="dividir" />
            <button onClick={clickNotification}>
              <img src={bell} alt="" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
