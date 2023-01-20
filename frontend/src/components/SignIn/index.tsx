import Link from 'next/link'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'
import { toast } from 'react-toastify'

type SignInProps = {
  signupact: (act: boolean) => void
}

export function SignIn({signupact}: SignInProps) {
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth()
  const [isLoaded, setIsLoaded] = useState(false)

  async function handleSignIn(data:any) {
    setIsLoaded(!isLoaded)
    try {
      await signIn(data)
    }catch(err) {
      toast.error("username ou senha incorrestos !", {
        position: 'top-center'
      });
      
      setIsLoaded(!!isLoaded)
    }
  }

  return (
    <div className={styles.loginContainer} onSubmit={handleSubmit(handleSignIn)}>
      <form action="" className={styles.form}>

        <label htmlFor="name">username</label>
        <input
          {...register('username')}
          id="name"
          type="text"
          autoComplete="name"
          required className={styles.inputName}
        />
        <label htmlFor="name">senha</label>
        <input
          {...register('password')}
          id="pass" 
          type="password" 
          autoComplete="password" 
          required 
          className={styles.inputPass}
        />
        <button type="submit" >Login</button>
      </form>

      <div className={styles.signUp} onClick={() => {signupact(true)}}>Nao possui uma conta? <span>Cadastre-se</span></div>
    </div>
  )
}