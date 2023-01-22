import React from 'react'
import DashboardOrder from './DashboardOrder'
import DashboardShowcase from './DashboardShowcase'
import DashboardTitle from './DashboardTitle'

const Dashboard = ({dashboardTitle,dashboardOrder,dashboardCard}) => {
  
  return (
    <div className='mt-4'>
        <DashboardTitle text={dashboardTitle} />
        <DashboardOrder opcoes={dashboardOrder}/>
        <div>
        <DashboardShowcase Card={dashboardCard}/>

        </div>

        

    </div>
  )
}

export default Dashboard