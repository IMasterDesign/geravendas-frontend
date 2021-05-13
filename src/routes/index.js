import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';
import Clients from '../views/Home/client';
//
import Client from '../views/Client/';
//
import Product from '../views/Product/';
import ProductCategory from '../views/ProductCategory';
//
import Sale from '../views/Sale/';
import QrCode from '../views/QrCode';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home/client" exact component={Clients}/>

        <Route path="/task/" exact component={Task}/>
        <Route path="/task/:id" exact component={Task}/>

        <Route path="/client/" exact component={Client}/>
        <Route path="/client/:id" exact component={Client}/>

        <Route path="/product/" exact component={Product}/>
        <Route path="/product/:id" exact component={Product}/>
        
        <Route path="/productcategory/" exact component={ProductCategory}/>
        <Route path="/productcategory/:id" exact component={ProductCategory}/>
        
        <Route path="/sale/" exact component={Sale}/>
        <Route path="/sale/:id" exact component={Sale}/>

        <Route path="/qrcode" exact component={QrCode}/>
      </Switch>
    </BrowserRouter>
  )
}