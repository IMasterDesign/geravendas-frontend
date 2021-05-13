import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import CssBaseline from '@material-ui/core/CssBaseline';
import { 
  Select, 
  TextField, 
  TextareaAutosize, 
  Checkbox, 
  Button 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconProductCategory from '../../assets/images/icons/yellow/icon_produtocategoria.png';

function ProductCategory({match}) {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState(false);

  async function LoadProductCategoryDetails() {
    await api.get(`/productcategory/${match.params.id}`)
    .then(response => {
      setName(response.data.name)
      setDescription(response.data.description)
      setImage(response.data.image)
      setStatus(response.data.status)
    })
  }

  async function Save() {
    if(!name)
      return alert("Você precisa informar o NOME da categoria!")

    if(match.params.id) {
      await api.put(`/productcategory/${match.params.id}`, {
        macaddress: isConnected,
        name,
        description,
        image,
        status
      }).then(() => 
        setRedirect(true)
      )

    } else {
      await api.post('/productcategory', {
        macaddress: isConnected,
        name,
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
    const res = window.confirm('Deseja realmente remover essa CATEGORIA?')
    if(res == true){
      await api.delete(`/productcategory/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true);
      
    LoadProductCategoryDetails();
  }, [LoadProductCategoryDetails])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header />

      <S.Form>
        <S.TypeIcons>
          <div>   
            <img src={iconProductCategory} alt="" />
            <span>{match.params.id ? 'Alterar registro' : 'Incluir novo registro'}</span>
          </div>
        </S.TypeIcons>

        <S.Input>
            <TextField
            required
            label="Nome da categoria..."
            onChange={e => setName(e.target.value)} 
            value={name}
          />
        </S.Input>

        <S.Input>
          <TextField
            required
            label="Descrição da categoria..."
            onChange={e => setDescription(e.target.value)}
            value={description}
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

export default ProductCategory;
