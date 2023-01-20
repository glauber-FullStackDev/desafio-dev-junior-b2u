import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import B4ULogo from '../../../public/logo.png'
import Menu from '../../../public/menu-hamb.png'
import Bit from '../../../public/logoMin.png'
import { useState } from 'react'

export default function Header(){

  const [openMenu,setOpenMenu] = useState(false)

  
  function menuToggle() {
    setOpenMenu(!openMenu)
  }

  return (
      <div className={styles.headerContainer}>
        <Link href='/Landing' className={styles.landing}>
          <div className={styles.menuhamb} onClick={() => {menuToggle()}}>
            <Image src={Menu} alt="menu" />
          </div>
          <div className={styles.headTitle}>
              <div className={styles.title}>
                <Image src={B4ULogo} alt="B2ULogo" width={190}/>
              </div>
          </div>
          <div className={styles.bit}>
            <Image src={Bit} alt="bit" />
          </div>
        </Link>

        <div className={styles.anotherPages}>
          <Link href='/CreateCar'>
            <button>Cadastrar carro</button>
          </Link>

          <Link href='/CarManagement'>
            <button>Gerenciar carros</button>
          </Link>
        </div>

        <div className={styles.logout}>
          <button> Logout </button>
        </div>
      </div>
    )
  
}
