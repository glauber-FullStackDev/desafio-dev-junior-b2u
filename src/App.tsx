import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Menu from './components/Menu';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Rodape from './components/Rodape';


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Menu/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>        
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
