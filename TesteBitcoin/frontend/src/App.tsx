import './global/style.ts';
import { Header } from './components/Header';
import { PageHome } from './pages/PageHome';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { PageRegistrationUser } from './pages/PageRegistrationUser';
import { PageRegistrationAuto } from './pages/PageRegistrationAuto';
import { ViewProduct } from './pages/ViewProduct';
import { EditAuto } from './pages/EditAuto';



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/PageRegistrationUser' element={<PageRegistrationUser/>}/>
          <Route path='/PageRegistrationAuto' element={<PageRegistrationAuto/>}/>
          <Route path='/ViewProduct/:id' element={<ViewProduct/>}/>
          <Route path='/EditAuto/:id' element={<EditAuto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
