import Link from 'next/link'
import styles from './styles.module.scss'

export function SignUp() {
  return (
    <div className={styles.loginContainer}>
      <form action="" className={styles.form}>

        <label htmlFor="name">username</label>
        <input id="name" type="text" autoComplete="name" required className={styles.inputName}/>
        <label htmlFor="name">senha</label>
        <input id="pass" type="password" autoComplete="password" required className={styles.inputPass}/>
        <Link href="/Home">
          <button type="submit">Cadastrar</button>
        </Link>
      </form>
    </div>
  )
}