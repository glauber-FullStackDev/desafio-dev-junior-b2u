import './App.css';
import FormAddCar from './components/FormAddCar/FormAddCar';
import TableData from './components/TableData/TableData';
import FormAddDono from './components/FormAddDono/FormAddDono';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <FormAddDono/>
        <FormAddCar/>
        <TableData/>
      </div>
    </div>
  );
}

export default App;
