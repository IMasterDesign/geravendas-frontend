import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import CssBaseline from '@material-ui/core/CssBaseline';
import { 
  TextField, 
  Checkbox, 
  Button, 
  TextareaAutosize, 
  InputLabel, 
  OutlinedInput, 
  InputAdornment, 
  MaskedInput, 
  NumberFormat 
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import TypeCategory from '../../utils/typeCategory';
import Footer from '../../components/Footer';

import iconProduct from '../../assets/images/icons/yellow/icon_produto.png';

function Product({match}) {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState(false);
  
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  async function LoadProductDetails() {
    await api.get(`/product/${match.params.id}`)
    .then(response => {
        setCategory(response.data.category)
        setName(response.data.name)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setImage(response.data.image)
        setStatus(response.data.status)
    })
  }

  async function Save() {
    if(!category)
      return alert("Você precisa informar o NOME do categoria!")
    else if(!name)
      return alert("Você precisa informar o NOME do produto!")
    else if(!price)
    return alert("Você precisa informar o VALOR do produto!")

    if(match.params.id) {
      await api.put(`/product/${match.params.id}`, {
        macaddress: isConnected,
        category,
        name,
        price,
        description,
        image,
        status
      }).then(() => 
        setRedirect(true)
      )

    } else {
      await api.post('/product', {
        macaddress: isConnected,
        category,
        name,
        price,
        description,
        image,
        status
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove() {
    const res = window.confirm('Deseja realmente remover esse PRODUTO?')
    if(res == true){
      await api.delete(`/product/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
    LoadProductDetails();
  }, [LoadProductDetails])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header />

      <S.Form>
        <S.TypeIcons>
          <div>   
            <img src={iconProduct} alt="" />
            <span>{match.params.id ? 'Alterar registro' : 'Incluir novo registro'}</span>
          </div>
        </S.TypeIcons>

        <S.Input>
          <TextField
            select
            label="Categoria do produto..."
            value={category}
            onChange={handleChange}
          >
            {TypeCategory.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Nome do produto..."
            onChange={e => setName(e.target.value)} 
            value={name}
          />
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Preço do produto..."
            onChange={e => setPrice(e.target.value)} 
            value={price}
          />
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

export default Product;
