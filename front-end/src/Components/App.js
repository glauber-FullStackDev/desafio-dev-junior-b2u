import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import global from "../global";
import HomePage from '../Pages/Home-Page'
import SignInPage from "../Pages/Sign-In-Page";
import SignUpPage from "../Pages/Sign-Up-Page";
import CreatePage from "../Pages/Create-Page";
import UserAdComponent from "./User-Components/User-ads";
import AdDetails from "./Ads-Components/Ads-Details";
import DetailsPageUser from "../Pages/Details-User-Page";
import EditPicPage from "../Pages/Edits-Pages/Edit-Pic-Page";
import EditNamePage from "../Pages/Edits-Pages/Edit-Name-Page";
import EditPricePage from "../Pages/Edits-Pages/Edit-Price-Page";
import EditMarkPage from "../Pages/Edits-Pages/Edit-Mark-Page";
import EditYearPage from "../Pages/Edits-Pages/Edit-Year-Page";
import EditDescPage from "../Pages/Edits-Pages/Edit-Desc-Page";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<SignInPage />} />
          <Route path="/Cadastro" element={<SignUpPage />} />
          <Route path="/Postar" element={<CreatePage />} />
          <Route path="/Meus-Anuncios" element={<UserAdComponent />} />
          <Route path="/Anuncio/:id" element={<AdDetails />} />
          <Route path="/Meu-Anuncio/:id" element={<DetailsPageUser />} />
          <Route path="/Edit/pic/:id" element={<EditPicPage />} />
          <Route path="/Edit/name/:id" element={<EditNamePage />} />
          <Route path="/Edit/price/:id" element={<EditPricePage />} />
          <Route path="/Edit/mark/:id" element={<EditMarkPage />} />
          <Route path="/Edit/year/:id" element={<EditYearPage />} />
          <Route path="/Edit/description/:id" element={<EditDescPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
