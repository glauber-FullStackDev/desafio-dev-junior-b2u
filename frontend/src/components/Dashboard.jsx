import React,{useContext} from 'react'
import CardCar from './CardCar'
import CardUser from './CardUser'
import DashboardOrder from './DashboardOrder'
import DashboardTitle from './DashboardTitle'
import { ApiContext } from '../contexts/ApiContext'
import { useEffect } from 'react'
import api from '../services/api'

const Dashboard = ({dashboardTitle,dashboardOrder}) => {

  
  const {users,cars,setUsers,setCars} = useContext(ApiContext);
  useEffect(()=>{
      api.get('/users')
      .then(res=>setUsers(res.data))
  },[users])
  useEffect(()=>{
    api.get('/cars')
    .then(res=>setCars(res.data))
},[users])

  return (
    <div className='mt-4'>
        <DashboardTitle text={dashboardTitle} />
        <DashboardOrder opcoes={dashboardOrder}/>
        <div>
        <div className='bg-gray-twelve justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 md:pl-24 h-[500px] overflow-y-scroll w-full mt-16 flex flex-wrap gap-4 p-4'>
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