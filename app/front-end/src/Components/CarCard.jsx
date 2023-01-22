import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/CarCard.css'
import trash from '../Images/lixeira.png';
import edit from '../Images/edit.png';
import Context from '../Context/CarShopContext';
import { getUserCars, deleteCar, getCars } from '../Services/Api';

function CarCard({ car }) {
  const { name, brand, color, model, year, price, image, id, published } = car;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setCars, setUserCars } = useContext(Context);

  const formatedData = (creationDate) => {
    const data = new Date(creationDate);
    const day = data.getDate();
    let month = data.getMonth() + 1;
    const year = data.getFullYear();
    if (day < 10 && month < 10) return ['0' + day, '0' + month, year].join('/');
    if (day < 10) return ['0' + day, month, year].join('/');
    if (month < 10) return [day, '0' + month, year].join('/');
    return [day, month, year].join('/');
  }

  const handleClickEdit = () => {
    navigate(`/mycars/edit/${ id }`);
  };

  const handleClickDelete = async () => {
    await deleteCar(id);
    const cars = await getCars();
    setCars(cars);
    const userCars = await getUserCars();
    if (!Array.isArray(userCars)) {
      return setUserCars([]);
    }
    setUserCars(userCars);
  };

  const handleClickSeeMore = () => {
    navigate(`/carinfo/${ id }`);
  };

  return (
    <li key={ id } className="car-card">
      <img width="250" src={ image } alt="" />
      <p className="car-name">{ brand } { name } { model }</p>
      <span className="year-color">{ year } - { color }</span>
      <div className="price-date">
        <span className="car-price">{ Number(price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</span>
        <span className="date">Published in: { formatedData(published) }</span>
      </div>
      {
        pathname === '/' ? (
          <button onClick={ handleClickSeeMore } className="btn-see-more">See more...</button>
        ) : (
          <div className="container-card-buttons">
            <button onClick={ handleClickEdit } className="card-buttons"><img src={ edit } alt="" /></button>
            <button id={ id } onClick={ handleClickDelete } className="card-buttons"><img src={ trash } alt="" /></button>
          </div>
        )
      }
    </li>
  );
};

export default CarCard;