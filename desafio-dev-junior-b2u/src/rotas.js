import {Routes,Route, Outlet, Navigate} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Consultar from './Pages/Consultar/Consultar'
import Login from './Pages/login/Login'
import Cadastrar from './Pages/login/CadastrarDono/Cadastrar'
import AdiconarCarro from './Pages/AdicionarCarro/Adicionar'
import Deletar from './Pages/Deletar/DeletarCarro'
import {getItem} from './utils'

function Protect({redirectTo}){
   const isAuthenticated = getItem('token')
   return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo}/>
}
function MainRouts(){
   return (
    <Routes> 
   
    <Route path='/' element={<Login/>}/>
    <Route element={<Protect redirectTo="/"/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/consulta' element={<Consultar/>}/>
    <Route path='/cadastrar' element={<Cadastrar/>}/>
    <Route path='/cadastrarCarro' element={<AdiconarCarro/>}/>
    <Route path='/deletarCarro' element={<Deletar/>}/>
    </Routes>
   )
   
}

export default  MainRouts