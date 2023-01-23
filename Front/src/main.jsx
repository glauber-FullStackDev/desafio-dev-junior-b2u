import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import { App } from './App'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Anunciar } from './pages/Anunciar'
import { Registros } from './pages/Registros'
import { DonoRegistro } from './pages/DonoRegistro'
import { Anuncio } from './pages/Anuncio'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<App />} >
                <Route path='/' element={<Home />} />
                <Route path='anuncio/:id' element={<Anuncio />} />
                <Route path='search' element={<Search />} />
                <Route path='anunciar' element={<Anunciar />} />
                <Route path='dono-registro' element={<DonoRegistro />} />
                <Route path='registros' element={<Registros />} />
            </Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>
)

// para importar com mais facildiade, insira primeiro o componente '<Home />' depois é só dar um (ctrl + espaço) nele que a primeira opção é a importação automática, isso serve pra qualquer componente