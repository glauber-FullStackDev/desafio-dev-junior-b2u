import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './helpers/PrivateRoutes';
import Main from './layouts/main';
import BuyCars from './pages/buyCars';
import Login from './pages/login';
import Register from './pages/register';
import IncludeCars from './pages/includeCars';
import SellCars from './pages/sellCars';
import ManageCars from './pages/ManageCars';
import CarDetails from './pages/carDetails';
import UpdateCars from './pages/updateCars';

function Routes() {
  return (
    <Router>
        <Route path="/" element={<Main />}>
            <Route path="" element={<BuyCars/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path=":id" element={<CarDetails/>}/>
            <Route path="login" element={<Login/>}/>
          <Route element={<PrivateRoutes/>}>
          <Route path="sell" element={<SellCars/>}>
            <Route path="" element={<ManageCars/>} />
            <Route path="add" element={<IncludeCars/>}/>
            <Route path=":id" element={<UpdateCars/>}/>
          </Route>
          </Route>
        </Route>
    </Router>
  );
}

export default Routes;
