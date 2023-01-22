import Header from '../Components/Header';
import '../Styles/MyCars.css';
import CarCard from '../Components/CarCard';
import Context from '../Context/CarShopContext';
import { useContext } from 'react';

function MyCars() {
  const { userCars } = useContext(Context);

  return (
    <div className="mycars">
      <Header />
      {
        Array.isArray(userCars) && userCars.length ? (
          <div className="container-car-list">
            {
              userCars.map((car) => <CarCard key={ car.id } car={ car } />)
            }
          </div>
        ) : <p className="no-cars">You didn't post any cars!</p>
      }
    </div>
  )
}

export default MyCars;