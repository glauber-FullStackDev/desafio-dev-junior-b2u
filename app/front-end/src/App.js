import { Route, Routes } from 'react-router-dom';
import CarInfo from './Pages/CarInfo';
import EditPage from './Pages/EditPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import MyCars from './Pages/MyCars';
import SellPage from './Pages/SellPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/register" element={ <LoginPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/sell" element={ <SellPage /> } />
      <Route path="/mycars" element={ <MyCars /> } />
      <Route path="/mycars/edit/:id" element={ <EditPage /> } />
      <Route path="/carinfo/:id" element={ <CarInfo /> } />
    </Routes>
  )
}

export default App;
