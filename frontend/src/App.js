import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CarList from './components/CarList';
import CarAdd from './components/CarAdd';
import CarEdit from './components/CarEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CarList/>}></Route>
        <Route path='/add' element={<CarAdd/>}></Route>
        <Route path='/:id' element={<CarEdit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
