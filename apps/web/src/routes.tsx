import React from 'react'
import { Routes as RoutesWrapper, Route } from 'react-router-dom'

import Access from './pages/Auth/Access'
import Start from './pages/Auth/Start'
import EditSell from './pages/EditSell'
import Home from './pages/Home'
import NewSell from './pages/NewSell'
import NotFound from './pages/NotFound'
import Sell from './pages/Sell'

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/access" element={<Access />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/sell/new" element={<NewSell />} />
      <Route path="/sell/:id" element={<EditSell />} />
      <Route path="*" element={<NotFound />} />
    </RoutesWrapper>
  )
}

export default Routes
