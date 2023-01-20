import styles from './styles.module.scss'
export default function CarList() {

  const cart = [{
    id: '340tuwrogjgapwsfsfgsdfg',
    name: 'Palio',
    brand: 'Fiat',
    manufactureYear: 2013,
    description: 'Carro com 10 anos de uso e 230000km rodados e nao tem nenhum risoc e batido',
    owner: 'Gabriel'
  }]

  return (
    <div className={styles.carListContainer}>
      <div className={styles.list}>
      <table className={styles.cartTable} cellSpacing={0}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Ano</th>
                <th>Descrição</th>
                <th>Dono</th>
              </tr>
            </thead>
            
            <tbody className={styles.tbody}>
  
            {cart.map((car, index) => {
              return (
                <tr key={car.id}>
                  <td className={styles.name}> 
                    <span>Nome</span>
                    <div>{car.name}</div>
                  </td>
                  <td className={styles.brand}>
                    <span>Marca</span>
                    <div> {car.brand} </div>
                  </td>
                  <td className={styles.manufactureYear}>
                    <span>Ano</span>
                    <div>{car.manufactureYear}</div>
                  </td>
                  <td className={styles.description}>
                    <span>Descrição</span>
                    <div className={styles.descriptionContent}>{car.description}</div>
                  </td>
                  <td className={styles.owner}>
                    <span>Dono</span>
                    <div>{car.owner}</div>
                  </td>
                </tr>
              )
            })}
            </tbody>           
          </table>
      </div>
    </div>
  )
}