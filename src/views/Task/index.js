import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField, TextareaAutosize, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import TypeIcons from '../../utils/typeIcons';
import Footer from '../../components/Footer';

import iconCalendar from '../../assets/images/icons/blue/icon_date.png';
import iconClock from '../../assets/images/icons/blue/icon_time.png';

function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();  

  async function LoadTaskDetails() {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save() {
    if(!title)
      return alert("Você precisa informar o título da tarefa!")
    else if(!description)
      return alert("Você precisa informar a descrição da tarefa!")
    else if(!type)
      return alert("Você precisa selecionar o tipo da tarefa!")
    else if(!date)
      return alert("Você precisa definir a data da tarefa!")
    else if(!hour)
      return alert("Você precisa definir a hora da tarefa!")

    if(match.params.id) {
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => 
        setRedirect(true)
      )

    } else {
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove() {
    const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res == true){
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
      LoadTaskDetails();
    }, []
  );
  //[LoadTaskDetails]

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header />

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={() => setType(index)}>
                 <img src={icon} alt="" className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <TextField
            required
            label="Título da tarefa..."
            onChange={e => setTitle(e.target.value)} 
            value={title}
          />
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Descrição da tarefa..."
            onChange={e => setDescription(e.target.value)} 
            value={description}
          /> 
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Data da tarefa..."
            onChange={e => setDate(e.target.value)}
            value={date}
            type="date"
          />
          <div>
            <img 
              src={iconCalendar} 
              alt="" 
            />
          </div>
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Hora da tarefa..."
            onChange={e => setHour(e.target.value)}
            value={hour}
            type="time"
          />
          <div>
            <img 
              src={iconClock} 
              alt="" 
            />
          </div>            
        </S.Input>

        <S.Options>
          <div>
            <Checkbox
              checked={done}
              onChange={() => setDone(!done)}
              inputProps={{ 'aria-label': 'default checkbox' }}
            />
            <span>Tarefa Concluída</span>
          </div>
          { match.params.id && <button type="button" onClick={Remove}>Excluir</button> }
        </S.Options>

        <S.Save>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={Save}
          >
            Salvar
          </Button>
        </S.Save>

      </S.Form>

      <Footer/>
    </S.Container>
  )
}

export default Task;
