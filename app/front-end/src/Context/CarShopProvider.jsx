import { useEffect, useState } from 'react';
import Context from './CarShopContext';
import { useNavigate } from 'react-router-dom';
import { getCars, getCarsBySearch, getUserCars } from '../Services/Api';

const CarShopProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState({ type: undefined, filter: undefined });
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [userCars, setUserCars] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      const data = await getCars();
      if (selectedFilter.type) {
        const allCars = data.filter((car) => car[selectedFilter.type] === selectedFilter.filter);
        return setCars(allCars);
      };
      setCars(data);
    })()
  }, [selectedFilter]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getUserCars();
        setUserCars(data);
      }
    })()
  }, []);

  const handleClickLogin = () => {
    if (token) {
      setUserCars([]);
      localStorage.removeItem('token');
      return navigate('/');
    }
    navigate('/login');
  };

  const handleClickSearch = async (e) => {
    e.preventDefault();
    const response = await getCarsBySearch(search);
    setCars(response);
    setSearch('');
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleClickRemove = async () => {
    const allCars = await getCars();
    setCars(allCars);
  };

  const valueProvider = {
    handleClickLogin,
    handleClickSearch,
    handleSearch,
    handleClickRemove,
    userCars,
    setUserCars,
    cars,
    setCars,
    search,
    setSearch,
    selectedFilter,
    setSelectedFilter,
  };

  return (
    <Context.Provider value={ valueProvider }>
      { children }
    </Context.Provider>
  )
}

export default CarShopProvider;