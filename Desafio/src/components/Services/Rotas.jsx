import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login.jsx';
import Cadastro from '../Pages/Cadastro.jsx';
import Catalogo from '../Pages/Catalogo.jsx';
import Home from '../Pages/Home.jsx';
import Sobre from '../Pages/Sobre.jsx';
import Navbar from '../Layouts/NavBar.jsx';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path='/inicio' element={<> <Navbar/> <Home/> </>}/>
                <Route exact path="/cadastro" element={<> <Navbar/> <Cadastro/> </>}/>
                <Route exact path="/catalogo" element={<> <Navbar/> <Catalogo/> </>}/>
                <Route exact path="/sobre" element={<> <Navbar/> <Sobre/> </>}/>
            </Routes>
        </Router>
    )
}

export default Rotas;