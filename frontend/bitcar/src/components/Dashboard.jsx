import React,{useContext} from 'react'
import CardCar from './CardCar'
import CardUser from './CardUser'
import DashboardOrder from './DashboardOrder'
import DashboardTitle from './DashboardTitle'
import { ApiContext } from '../contexts/ApiContext'


const Dashboard = ({dashboardTitle,dashboardOrder}) => {

  
  const {users,cars} = useContext(ApiContext);
  return (
    <div className='mt-4'>
        <DashboardTitle text={dashboardTitle} />
        <DashboardOrder opcoes={dashboardOrder}/>
        <div>
        <div className='bg-gray-twelve overflow-y-scroll justify-center h-fit w-full mt-16 flex flex-wrap gap-4 p-4'>
        {dashboardTitle == 'Usuários' ? 
          users.map(user => (
            <CardUser key={user.id}
            name={user.name}
            id={user.id}
            tel={user.tel}
            email={user.email}
            cars={user.carros}
            />
          ))
        : 
        cars.map(car=> (
          <CardCar key={car.id}
          id={car.id}
          name={car.name}
          marca={car.marca}
          ano_fabri={car.ano_fabri}
          descricao = {car.descricao}
          user={car.dono}
          userId={car.donoId}
          />
        ))}
    </div>

        </div>

        

    </div>
  )
}

export default Dashboard