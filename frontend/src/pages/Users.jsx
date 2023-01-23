import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import CardUser from '../components/CardUser'

const Users = () => {
  return (
    <div>
       <Header/>
       <Dashboard dashboardTitle={'Usuários'} dashboardCard={CardUser} dashboardOrder={['Todos os usuários','Clientes fiéis']}/>
       <Footer/>


    </div>
  )
}

export default Users