import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import Rotas from "./Routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="">
        <Rotas/>
        <ToastContainer/>
    </div>
  )
}

export default App
