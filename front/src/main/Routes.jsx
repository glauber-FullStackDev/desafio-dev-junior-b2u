import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import CarsCrud from '../components/cars/CarsCrud';
import Home from '../components/home/Home';

export default (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cars' component={CarsCrud} />
    <Redirect from='*' to='/' />
  </Switch>
);
