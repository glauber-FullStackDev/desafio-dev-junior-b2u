//styles
import styles from './AuthForm.module.css'
// hooks
import { useContext } from 'react'
import { useState } from 'react'
// components
import { Message } from '../../components/Message/Message'
// context
import { AuthContext } from '../../context/auth/AuthContext'
// interfaces
import { User } from '../../interfaces/User'

export const Login = () => {
    const [controllerForm, setControllerForm] = useState<boolean>(true)
    const { login, error, register, success, loading } = useContext(AuthContext)!

    const [userForm, setUserForm] = useState<User>({
        name: '',
        email: '',
        password: '',
        contact_phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUserForm((prev) => {
            const newDatas: User = { ...prev, [name]: value }
            return newDatas
        })

    }

    const handleSubmit = () => {
        if(!userForm.email || !userForm.password) return 

        if(controllerForm) {
            login(userForm)
            return 
        }

        register(userForm)
        if(!error) {
            restartForm()
        }
    }

    const changeForm = () => {
        setControllerForm(!controllerForm)
    }

    const restartForm = () => {
        userForm.name = ''
        userForm.email = ''
        userForm.contact_phone = ''
        userForm.password = ''
    }

  return (
    <div className={styles.formAuth}>
        <div className={styles.componentsForm}>
            {!controllerForm && (
                 <div className={styles.elementForm}>
                 <input 
                     type="text" 
                     name='name'
                     placeholder='Nome' 
                     value={userForm.name}
                     onChange={(e) => handleChange(e)}
                 />
             </div>
            )}
            <div className={styles.elementForm}>
                <input 
                    type="text" 
                    name='email'
                    placeholder='Email' 
                    value={userForm.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={styles.elementForm}>
                <input 
                    type="password" 
                    name='password'
                    placeholder='Senha'
                    value={userForm.password}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            {!controllerForm && (
                 <div className={styles.elementForm}>
                 <input 
                     type="text" 
                     name='contact_phone'
                     placeholder='Telefone de contato' 
                     value={userForm.contact_phone}
                     onChange={(e) => handleChange(e)}
                 />
             </div>
            )}

            {loading ? (
                <button disabled type="submit" className={styles.btnSubmit}>Aguarde...</button>
            ) : (
                <button type="submit" onClick={handleSubmit} className={styles.btnSubmit}>Enviar</button>
            )}
        </div>

        <div className={styles.pageForm}>
            {controllerForm ? (
                <p>Não tem uma conta? 
                    <span onClick={() => {
                            changeForm()
                            restartForm()
                        }} className={styles.changeFormSpan}> Registrar-se
                    </span>
                </p>
            ) : (
                <p>Já tem uma conta? 
                    <span onClick={() => {
                        changeForm()
                        restartForm()
                    }} className={styles.changeFormSpan}> Entrar
                    </span>
                </p>
            )}
        </div>

        {error && <Message msg={error.message} type='error' />}
        {success && <Message msg={success} type='success' />}
    </div>
  )
}
