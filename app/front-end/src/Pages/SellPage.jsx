import Header from '../Components/Header';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Sell.css';
import imgIcon from '../Images/img-icon.png';
import Context from "../Context/CarShopContext";
import { insertCar, getUserCars, getCars } from '../Services/Api';

function SellPage() {
  const [imgSrc, setImgSrc] = useState(undefined);
  const [car, setCar] = useState({});
  const [error, setError] = useState('');
  const { setUserCars, setCars } = useContext(Context);
  const navigate = useNavigate();

  const handleChangeImage = ({ target }) => {
    setImgSrc(target.value);
    setCar({ ...car, image: target.value });
  };

  const handleClick = async () => {
    try {
      await insertCar(car);
      const allMyCars = await getUserCars();
      const cars = await getCars();
      setUserCars(allMyCars);
      setCars(cars);
      navigate('/mycars');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="sell">
      <Header />
      <div className="container-img-inputs">
        <div>
          <img className="picture_img" src={ imgSrc } alt="" />
          <label className="archive">
            <img width="40" src={ imgIcon } alt="" />
            <input type="url" onChange={ handleChangeImage } name="image" placeholder="http://image-url.com" />
          </label>
        </div>
        <div className="inputs-infos">
          <input onChange={ ({ target }) => setCar({ ...car, brand: target.value }) } type="text" placeholder="Brand" />
          <input onChange={ ({ target }) => setCar({ ...car, name: target.value }) } type="text" placeholder="Name" />
          <input onChange={ ({ target }) => setCar({ ...car, model: target.value }) } type="text" placeholder="Model" />
          <input onChange={ ({ target }) => setCar({ ...car, year: Number(target.value) }) } type="number" placeholder="Year" />
          <input onChange={ ({ target }) => setCar({ ...car, color: target.value }) } type="text" placeholder="Color" />
          <input onChange={ ({ target }) => setCar({ ...car, price: Number(target.value) }) } type="number" placeholder="Price" />
          <span>{ error }</span>
        </div>
      </div>
      <textarea rows="6" onChange={ ({ target }) => setCar({ ...car, description: target.value }) } placeholder="Description" />
      <button onClick={ handleClick } className="send-car">Submit ad</button>
    </div>
  )
}

export default SellPage;