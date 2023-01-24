import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import RegisterCar from "./page/RegisterCar";
import NoPage from "./page/NoPage";
import EditCar from "./page/EditCar";
import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="register" element={<RegisterCar />} />
          <Route path="edit" element={<EditCar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
