import { useContext, useState } from 'react';
import CarCard from '../Components/CarCard';
import Filters from '../Components/Filters';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import Context from '../Context/CarShopContext';
import '../Styles/Home.css';

const HomePage = () => {
  const [visibility, setVisibility] = useState(false);
  const [listClass, setListClass] = useState('car-list');
  const [btnText, setBtnText] = useState('Ocultar filtros');
  const { cars } = useContext(Context);

  const handleClick = () => {
    setVisibility(!visibility);
    if (visibility) {
      setBtnText('Ocultar filtros');
      setListClass('car-list');
    } else {
      setBtnText('Mostrar filtros');
      setListClass('car-list2')
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="container-list-btns">
        <SearchBar handleClick={ handleClick } btnText={ btnText } />
        {
          cars.length ? (
            <div className="container-list-filters">
              <Filters hidden={ visibility } />
              <ul className={ listClass }>
                {
                  cars.map(car => <CarCard key={ car.id } car={ car } />)
                }
              </ul>
            </div>
          ) : (
            <div className="container-no-cars">
              <p className="no-cars">No cars posted, be the first to post...</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomePage;