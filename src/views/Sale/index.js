import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import { TextField, TextareaAutosize, Checkbox, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconSale from '../../assets/images/icons/yellow/icon_produtocategoria.png';
import iconCalendar from '../../assets/images/icons/blue/icon_date.png';

function Sale({match}) {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [status, setStatus] = useState(false);
  const [client, setClient] = useState();
  const [product, setProduct] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  const useStyles = makeStyles((theme) => ({tEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const handleChange = (event) => {
    setClient(event.target.value);
    setProduct(event.target.value);
  };

  async function LoadSaleDetails() {
    await api.get(`/sale/${match.params.id}`)
    .then(response => {
      setStatus(response.data.status)
      setClient(response.data.client)
      setProduct(response.data.product)
      setType(response.data.type)
      setAmount(response.data.amount)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.date), 'yyyy-MM-dd'))
    })
  }

  async function Save() {
    if(!type)
      return alert("Você precisa informar o TIPO da venda!")
    else if(!client)
        return alert("Você precisa informar o CLIENTE da venda!")
    else if(!product)
        return alert("Você precisa informar PRODUTO da venda!")
    else if(!amount)
        return alert("Você precisa informar o VALOR da venda!")
    else if(!status)
        return alert("Você precisa informar a situação da venda!")
    else if(!date)
        return alert("Você precisa informar a DATA da venda!")

    if(match.params.id) {
      await api.put(`/sale/${match.params.id}`, {
        macaddress: isConnected,
        status,
        client,
        product,
        type,
        amount,
        description,
        date: `${date}T00:00.000`,
        status   
      }).then(() => 
        setRedirect(true)
      )

    } else {
      await api.post('/sale', {
        macaddress: isConnected,
        client,
        product,
        type,
        amount,
        description,
        date: `${date}T00:00.000`,
        status
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove() {
    const res = window.confirm('Deseja realmente remover o cliente?')
    if(res == true){
      await api.delete(`/sale/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
    LoadSaleDetails();
  }, [LoadSaleDetails])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header />

      <S.Form>
        <S.TypeIcons>
          <div>   
            <img src={iconSale} alt="" />
            <span>{match.params.id ? 'Alterar registro' : 'Incluir novo registro'}</span>
          </div>
        </S.TypeIcons>

        <S.Select>
          <Select
              value={client}
              onChange={e => setClient(e.target.value)}
            >
            <MenuItem value="">
                <em>Selecion um item</em>
            </MenuItem>
            <MenuItem value={10}>Cliente X</MenuItem>
            <MenuItem value={20}>Cliente Y</MenuItem>
            <MenuItem value={30}>Cliente Z</MenuItem>
          </Select>
        </S.Select>
        <S.Input>
          <TextField
            required
            variant="outlined"
            label="Nome do cliente..."
            onChange={e => setClient(e.target.value)} 
            value={client}
          />
        </S.Input>
        
        <S.Select>
            <Select
              value={product}
              onChange={e => setProduct(e.target.value)}
            >
            <MenuItem value="">
                <em>Selecion um item</em>
            </MenuItem>
            <MenuItem value={10}>Produto X</MenuItem>
            <MenuItem value={20}>Produto Y</MenuItem>
            <MenuItem value={30}>Produto Z</MenuItem>
            </Select>
        </S.Select>
        <S.Input>
          <TextField
            required
            variant="outlined"
            label="Nome do produto..."
            onChange={e => setProduct(e.target.value)} 
            value={product}
          />
        </S.Input>

        <S.Input>
          <TextField
            required
            variant="outlined"
            onChange={e => setDate(e.target.value)}
            value={date}
            type="date"
          />
          <img src={iconCalendar} alt=""/>
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

        <S.TextArea>
          <TextareaAutosize
            rowsMax={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </S.TextArea>

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

export default Sale;
