import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import { 
  TextField, 
  TextareaAutosize, 
  Checkbox, 
  Button 
} from '@material-ui/core';
//
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconClient from '../../assets/images/icons/yellow/icon_cliente.png';
import iconCalendar from '../../assets/images/icons/blue/icon_date.png';

function Client({match}) {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [status, setStatus] = useState(false);
  const [name, setName] = useState();
  const [whatsapp, setWhatsApp] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [sexy, setSexy] = useState();
  const [birthday, setBirthday] = useState();

  const handleChange = (event) => {
    setSexy(event.target.value);
  };

  async function LoadClientDetails() {
    await api.get(`/client/${match.params.id}`)
    .then(response => {
      setName(response.data.name)
      setWhatsApp(response.data.whatsapp)
      setEmail(response.data.email)
      setAddress(response.data.address)
      setSexy(response.data.sexy)
      setBirthday(format(new Date(response.data.birthday), 'yyyy-MM-dd'))
      setStatus(response.data.status)
    })
  }

  async function Save() {
    if(!name)
      return alert("Você precisa informar o NOME do cliente!")
    else if(!whatsapp)
      return alert("Você precisa informar número do WHATSAPP do cliente!")
    else if(!email)
      return alert("Você precisa informar o E-MAIL do cliente!")
    else if(!sexy)
      return alert("Você precisa informar o SEXO do cliente!")

    if(match.params.id) {
      await api.put(`/client/${match.params.id}`, {
        macaddress: isConnected,
        name,
        whatsapp,
        email,
        address,
        sexy,
        birthday,
        status    
      }).then(() => 
        setRedirect(true)
      )
    } else {
      await api.post('/client', {
        macaddress: isConnected,
        name,
        whatsapp,
        email,
        address,
        sexy,
        birthday,
        status
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover esse CLIENTE?')
    if(res == true){
      await api.delete(`/client/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
    LoadClientDetails();
  }, [])
  //[LoadClientDetails])

  return (
    <S.Container>
      { redirect && <Redirect to="/home/client" /> }
      <Header />

      <S.Form>
        <S.TypeIcons>
          <div>   
            <img src={iconClient} alt="" />
            <span>{match.params.id ? 'Alterar registro' : 'Incluir novo registro'}</span>
          </div>
        </S.TypeIcons>

        <S.Input>
          <TextField
            required
            label="Nome do cliente..."
            onChange={e => setName(e.target.value)} 
            value={name}
          />
        </S.Input>

        <S.Input>
          <TextField
            required
            label="WhatsApp do cliente..."
            onChange={e => setWhatsApp(e.target.value)} 
            value={whatsapp}
            type="tel"
          /> 
        </S.Input>

        <S.Input>
          <TextField
            required
            label="E-mail do cliente..."
            onChange={e => setEmail(e.target.value)} 
            value={email}
            type="email"
          /> 
        </S.Input>

        <S.Input>
          <TextField
            multiline
            label="Endereço do cliente..."
            defaultValue={e => setAddress(e.target.value)}
            value={address}
            rows={4}
          />
        </S.Input>

        <S.Radio>
          <RadioGroup 
            row 
            aria-label="position" 
            name="position" 
            defaultValue="top"
            value={sexy} 
            onChange={handleChange}
          >
            <label>Gênero</label>
            <FormControlLabel
              checked={sexy == 'F' ? true : false}
              value="F"
              control={<Radio color="primary" />}
              label="Feminino"
              labelPlacement="bottom"
            />
            <FormControlLabel
              checked={sexy == 'M' ? true : false}
              value="M"
              control={<Radio color="primary" />}
              label="Masculino"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </S.Radio>

        <S.Input>
          <TextField
            label="Data de aniversário..."
            onChange={e => setBirthday(e.target.value)}
            value={birthday}
            type="date"
          />
          <div>
            <img 
              src={iconCalendar} 
              alt="" 
            />
          </div>
        </S.Input>

        <S.Options>
          <div>
            <Checkbox
              checked={status}
              onChange={() => setStatus(!status)}
              inputProps={{ 'aria-label': 'default checkbox' }}
            />
            <span>Ativo</span>
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

export default Client;
