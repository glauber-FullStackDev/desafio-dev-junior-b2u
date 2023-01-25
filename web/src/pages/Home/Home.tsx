// style
import styles from './Home.module.css'
// hooks
import { useContext, useEffect, useState } from "react"
// components
import { CarHome } from "../../components/CarHome/CarHome"
// context
import { CarsContext } from "../../context/cars/CarsContext"

export const Home = () => {
  const { getCars, listCars, countCar } = useContext(CarsContext)!
  const [qtdPages, setQtdPages] = useState<number>(0)
  const [countPags, setCountPags] = useState<number>(1)
  const [skip, setSkip] = useState<number>(0)
  const take = 10

  useEffect(() => {
    (async () => {
      await getCars(skip, take)
      const countCars = await countCar()
      setQtdPages(Math.ceil(countCars / 10))
    })()
  }, [skip])

  const infoCarsSkip = async (symbol: string) => {
    switch (symbol) {
      case '+':
        if(countPags < qtdPages) {
          setCountPags(prev => prev + 1)
          setSkip(prev => prev === 0 ? 10 : prev * countPags)
        }
        break
      case '-':
        if(countPags > 1) {
          setCountPags(prev => prev - 1)
          setSkip(prev => prev === 10 ? 0 : prev - take)
        }
        break
      default:
        break;
    }
    
  }

  return (
    <div className={styles.home}>
      <h2 id='titleHome'>Anúncio de vendas de automóveis</h2>
      {(listCars && listCars.length > 0) ? (
        <div className={styles.allCars}>
          {listCars.map(car => (
            <CarHome car={car} key={car.id} />
          ))}
        </div>
      ) : (
        <p>Sem carros para visualizar no momento...</p>
      )}
      {(listCars && qtdPages > 1) && (
        <div className={styles.pagination}>         
          <button onClick={() => infoCarsSkip('-')}>-</button>
          <p>{countPags}</p>
          <button onClick={() => infoCarsSkip('+')}>+</button>
        </div>
      )}
      
    </div>
  )

}