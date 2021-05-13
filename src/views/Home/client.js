import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import ClientFilterCard from '../../components/ClientFilterCard';
import ClientCard from '../../components/ClientCard';
import Footer from '../../components/Footer';

function Client() {
  const [filterActived, setFilterActived] = useState('all');
  const [clients, setClients] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadClients(){
    await api.get(`/client/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setClients(response.data)
    })
  }

  useEffect(() => {
    loadClients();

    if(!isConnected)
      setRedirect(true); 

  }, [filterActived, loadClients])

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode"/> }
      <Header />
      
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <ClientFilterCard title="Todos" actived={filterActived == 'all'}  />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <ClientFilterCard title="Hoje" actived={filterActived == 'today'} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <ClientFilterCard title="Semana" actived={filterActived == 'week'} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <ClientFilterCard title="Mês" actived={filterActived == 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <ClientFilterCard title="Ano" actived={filterActived == 'year'} />
        </button>        
      </S.FilterArea>

      <S.Title>
        <h3>Clientes</h3>
      </S.Title>

      <S.Content>
        {
          clients.map(t => (
          <Link to={`/client/${t._id}`}>
            <ClientCard name={t.name} sexy={t.sexy} birthday={t.birthday} status={t.status} />    
          </Link>
          ))  
        }
      </S.Content>

      <Footer />
    </S.Container>
  )
}

export default Client;
