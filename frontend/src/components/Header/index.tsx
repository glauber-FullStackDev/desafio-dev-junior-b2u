import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import B4ULogo from '../../../public/logo.png'
import Menu from '../../../public/menu-hamb.png'
import Bit from '../../../public/logoMin.png'
import { useState } from 'react'
import Close from '../../../public/close.png'

export default function Header(){

  const [openMenu,setOpenMenu] = useState(false)

  
  function menuToggle() {
    setOpenMenu(!openMenu)
  }

  return (
      <div className={styles.headerContainer}>
        <div className={styles.landing}>
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
        </div>

        <nav className={styles.menu}>
          <ul className={openMenu ? styles.toggle :""}>
            <li className={styles.close} onClick={menuToggle} >
              <Image src={Close} alt="" width={25} height={25}/>
            </li>

            <li className={styles.anotherPages}>
              <Link href='/CreateCar'>
                <button>Cadastrar carro</button>
              </Link>
            </li>
            <li>
              <Link href='/CarManagement' className={styles.managementCarButton}>
                <button>Gerenciar carros</button>
              </Link>
            </li>

            <li>
              <Link href='/' className={styles.carListButton}>
                <button>Listagem de carros</button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.logout}>
          <button> Logout </button>
        </div>


      </div>
    )
  
}
