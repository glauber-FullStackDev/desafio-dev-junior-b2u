import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Menu from './components/Menu';
import CadastroCarro from './pages/CadastroCarro';
import ListaCarros from './pages/ListaCarros';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import CarroPage from './pages/CarroPage';



const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Menu/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/carros' element={<ListaCarros/>}/>
        <Route path='/cadastro' element={<CadastroCarro/>}/>  
        <Route path='/carros/:id' element={<CarroPage/>}/>
        <Route path='/carros/editar/:id' element={<CadastroCarro/>}/>       
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
