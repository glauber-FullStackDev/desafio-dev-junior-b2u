import filterImg from '../Images/filter.png';
import lupa from '../Images/lupa.png';
import { useContext } from 'react';
import Context from '../Context/CarShopContext';

function SearchBar({ handleClick, btnText }) {
  const { cars, search, handleClickSearch, handleSearch, handleClickRemove } = useContext(Context);

  return (
  <div className="container-btn-filter">
    <div className="show-remove-filters">
      <button className="btn-filters" onClick={ handleClick }><img width="18" src={ filterImg } alt="" />{ btnText }</button>
      <button className="remove-filters" onClick={ handleClickRemove }>Remove filters</button>
    </div>
    <form htmlFor="search" className="container-search">
      <p>{ cars.length } Results</p>
      <div>
        <input id="search" value={ search } autoComplete="off" type="text" onChange={ handleSearch } placeholder="Search you car" />
        <button type="submit" onClick={ handleClickSearch }><img width="25" src={ lupa } alt="" /></button>
      </div>
      <button onClick={ handleClickRemove } className="remove-search">Show all</button>
    </form>
  </div>
  )
}

export default SearchBar;