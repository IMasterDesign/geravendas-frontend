import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac(){
    if(!mac)
      alert('Você precisa informar o número que apareceu no seu celular!');
    else{
      await localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload();
    }
  }


  return (
    <S.Container>
      { redirect && <Redirect to="/"/> }
      <Header/>

      <S.Content>
        <S.LeftCard>
          <h1>Para usar o <span>Gera Vendas</span> no seu computador</h1>
          <ul>
            <li>1). Abra a câmera do seu celular;</li>
            <li>2). Aponte o seu celular para essa tela para capturar o código.</li>
            <li><p>suas atividades serão sincronizadas com a do seu celular.</p></li>
          </ul>
        </S.LeftCard>
        <S.RightCard>
          <S.QrCodeArea>
            <Qr value='getmacaddress' size={256}/>
          </S.QrCodeArea>

          <S.ValidationCode>
            <span>Digite a numeração que apareceu no seu celular</span>
            <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
            <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
          </S.ValidationCode>
        </S.RightCard>
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default QrCode;
