import React from 'react'
import DashboardOrder from './DashboardOrder'
import DashboardShowcase from './DashboardShowcase'
import DashboardTitle from './DashboardTitle'

const Dashboard = () => {
  return (
    <div className='mt-4'>
        <DashboardTitle text={'Usuários'} />
        <DashboardOrder opcoes={['Todos os usuários','Clientes Fiéis']}/>
        <div>
        <DashboardShowcase/>

        </div>

        

    </div>
  )
}

export default Dashboard