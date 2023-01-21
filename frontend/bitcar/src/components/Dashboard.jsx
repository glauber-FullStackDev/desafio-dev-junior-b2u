import React from 'react'
import DashboardOrder from './DashboardOrder'
import DashboardShowcase from './DashboardShowcase'
import DashboardTitle from './DashboardTitle'

const Dashboard = () => {
  return (
    <div className='mt-4'>
        <DashboardTitle text={'Carros'} />
        <DashboardOrder opcoes={['Recentemente Adicionados','Mais novos']}/>
        <div className='flex justify-center'>
        <DashboardShowcase/>

        </div>

        

    </div>
  )
}

export default Dashboard