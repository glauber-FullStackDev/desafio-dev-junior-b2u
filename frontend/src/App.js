import './App.css';
import Cars from './pages/Cars';
import { Switch, Route, Redirect } from 'react-router-dom';
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <section className='App'>
      <Switch>
        <Redirect exact from='/' to='/cars' />
        <Route path='/cars'>
          <Cars />
        </Route>
        <Route path='/cars/:id'>
          <CarDetails />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
