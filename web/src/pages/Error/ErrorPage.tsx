// stlyes
import styles from './ErrorPage.module.css'
// react
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className={styles.errorPageNotFound}>
        <h2>Erro 404: Página não encontrada!</h2>
        <Link to='/'>
          <p>Voltar</p>
        </Link>
    </div>
  )
}