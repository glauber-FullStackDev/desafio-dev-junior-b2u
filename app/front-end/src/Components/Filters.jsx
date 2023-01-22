import { useState, useEffect, useContext } from 'react';
import Context from '../Context/CarShopContext';
import arrowDown from '../Images/arrowDown.png'
import { getCars } from '../Services/Api';

function Filters({ hidden }) {
  const [brands, setBrands] = useState([]);
  const [years, setYears] = useState([]);
  const [colors, setColors] = useState([]);
  const [brandsVisibility, setBrandsVisibility] = useState(true);
  const [yearsVisibility, setYearsVisibility] = useState(true);
  const [colorsVisibility, setColorsVisibility] = useState(true);
  const { setSelectedFilter } = useContext(Context);

  useEffect(() => {
    (async () => {
      const data = await getCars();
      const brands = [];
      const years = [];
      const colors = [];
      data.forEach((car) => {
        if (!brands.includes(car.brand)) {
          brands.push(car.brand);
        }
      });
      data.forEach((car) => {
        if (!years.includes(car.year)) {
          years.push(car.year);
        }
      });
      data.forEach((car) => {
        if (!colors.includes(car.color)) {
          colors.push(car.color);
        }
      });
      setBrands(brands);
      setYears(years);
      setColors(colors);
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ target }) => {
    const { id } = target;
    if (id === 'brand') setBrandsVisibility(!brandsVisibility);
    if (id === 'year') setYearsVisibility(!yearsVisibility);
    if (id === 'color') setColorsVisibility(!colorsVisibility);
  }

  const handleClickFilter = ({ target }) => {
    setBrandsVisibility(true);
    setYearsVisibility(true);
    setColorsVisibility(true);
    const { innerText } = target;
    if (target.className === 'year') {
      return setSelectedFilter({ type: target.className, filter: Number(innerText) });
    }
    setSelectedFilter({ type: target.className, filter: innerText });
  }

  return (
    <ul className="filter-list" hidden={ hidden }>
      <li className="filter-item" id="brand" onClick={ handleClick }><span>Brand</span><img className={ brandsVisibility ? 'down' : 'up' } width="10" src={ arrowDown } alt="" /></li>
      <ul className="item-list" hidden={ brandsVisibility }>
        {
          brands.map((brand) => <li onClick={ handleClickFilter } className="brand" key={ brand }>{ brand }</li>)
        }
      </ul>
      <li className="filter-item" id="year" onClick={ handleClick }><span>Year</span><img className={ yearsVisibility ? 'down' : 'up' } width="10" src={ arrowDown } alt="" /></li>
      <ul className="item-list" hidden={ yearsVisibility }>
        {
          years.map((year) => <li onClick={ handleClickFilter } className="year" key={ year }>{ year }</li>)
        }
      </ul>
      <li className="filter-item" id="color" onClick={ handleClick }><span>Color</span><img className={ colorsVisibility ? 'down' : 'up' } width="10" src={ arrowDown } alt="" /></li>
      <ul className="item-list" hidden={ colorsVisibility }>
        {
          colors.map((color) => <li onClick={ handleClickFilter } className="color" key={ color }>{ color }</li>)
        }
      </ul>
    </ul>
  );
}

export default Filters;