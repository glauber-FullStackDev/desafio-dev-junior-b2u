import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../Services/Api';
import Header from '../Components/Header';
import '../Styles/CarInfo.css';
import downArrow from '../Images/downArrow.png';
import email from '../Images/email.png';
import phone from '../Images/phone.png';

const CarInfo = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [imgSrc, setImgSrc] = useState('');

  useState(() => {
    (async () => {
      const data = await getCarById(id);
      setCar(data);
      setImgSrc(data.image);
    })()
  }, []);

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

  return (
    <div className="container-car-info">
      <Header />
      <div className="container-img-car-info">
        <img className="img-car" src={ imgSrc } alt="" />
        <div className="car-info-button">
          <div className="car-info">
            <h2>{ car.brand } { car.name } { car.model }</h2>
            <div className="color-year-date">
              <span>{ car.year } - { car.color }</span>
              <span>Published in: { formatedData(car.published) }</span>
            </div>
            <h3>{ Number(car.price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</h3>
            <span className="saller">Sold by: { car.salesman }</span>
          </div>
          <button>I'm interested</button>
        </div>
      </div>
      <div className="container-description-contact">
        <div className="know-more">
          <h2>Know more...</h2>
          <img src={ downArrow } width="40" alt="" />
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>{ car.description }</p>
        </div>
        <div className="salesman-info">
          <h2>Contact the seller</h2>
          <div className="email-number">
            <span><img width="30" src={ email } alt="" />{ car.email }</span>
            <span><img width="30" src={ phone } alt="" />{ car.phoneNumber }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarInfo;