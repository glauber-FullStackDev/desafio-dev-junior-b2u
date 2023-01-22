// style
import './App.css'
// hooks
import { useCheckAuth } from './hooks/useCheckAuth'
// pages/components
import { Login } from './pages/AuthForm/AuthForm'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/Error/ErrorPage'
import { CarDetails } from './components/CarDetails/CarDetails'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { UpdateCar } from './pages/UpdateCar/UpdateCar'

export const App = () => {
  const { auth } = useCheckAuth()

  return (

    <div className="App">
      {auth && <Navbar />}

      <Routes>
        <Route path='/' element={auth ? <Home /> : <Login />} />
        <Route path='/cars/:id' element={auth ? <CarDetails /> : <Login />} />
        <Route path='/cars/update/:id' element={auth ? <UpdateCar /> : <Login />} />
        <Route path='/dashboard' element={auth ? <Dashboard /> : <Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  )
}
