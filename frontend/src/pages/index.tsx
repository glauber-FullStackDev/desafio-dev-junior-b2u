import { useState } from 'react'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import styles from './styles.module.scss'
import Image from 'next/image'
import SharEnergyLogo from '../../public/logo.png'

export default function Home() {
  const [isSignUpAction, setIsSignUpAction] = useState(false)

  return (
    <div className={styles.homeContainer}>
      <div className={styles.loginBlock}>
        <div className={styles.useTitle}>
          <Image alt='logo' src={SharEnergyLogo}/>
        </div>
        {isSignUpAction ? 
          <SignUp/>
        :
          <SignIn signupact={setIsSignUpAction}/>
        }
      
      </div>
    </div>
  )
}
