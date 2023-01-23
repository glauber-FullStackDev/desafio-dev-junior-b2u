import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';
import Detalhe from './pages/detalhe';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/alterar/:idParam' element={<Cadastrar/>} />
                <Route path='/detalhe/:idParam' element={<Detalhe />} />
            </Routes>
        </BrowserRouter>
    )
}
