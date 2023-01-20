import Header from '@/components/Header'
import styles from './styles.module.scss'

export default function CreateCar() {
  return (
    <div className={styles.createCarContainer}>
      <Header/>

      <div className={styles.createCar}>
        <h2 className={styles.createCarTitle}> Cadastrar carros</h2>

        <form action="" className={styles.form}>
          <label htmlFor="name">Nome</label>
          <input 
            id="name" 
            type="text" 
            autoComplete="name" 
            required 
            className={styles.inputName}
          />
          <label htmlFor="brand">Marca</label>
          <input 
            id="brand" 
            type="text" 
            autoComplete="email" 
            required 
            className={styles.inputBrand}
          />
          <label htmlFor="year">Ano</label>
          <input 
            id="year" 
            type="text" 
            autoComplete="year" 
            required 
            className={styles.inputYear}
          />
          <label htmlFor="decription">Descrição</label>
          <textarea 
            id="description" 
            autoComplete="descripton"
            maxLength={300}
            required 
            className={styles.inputDescription}
          />

          <h2> Dados do proprietário </h2>

          <label htmlFor="ownerName">Nome</label>
          <input 
            id="oname" 
            type="text"
            autoComplete="ownername" 
            required 
            className={styles.inputOnwerName}
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            autoComplete="email" 
            required 
            className={styles.email}
          />

          <label htmlFor="name">Telefone</label>
          <input 
            id="telephone" 
            type="text" 
            autoComplete="telephone" 
            required 
            className={styles.inputTel}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}