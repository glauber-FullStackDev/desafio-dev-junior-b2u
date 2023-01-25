// style
import styles from './Navbar.module.css'
// icons
import { Door, House, BookOpen } from 'phosphor-react'
// hooks
import { NavLink, useNavigate } from 'react-router-dom'
// context
import { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'

export const Navbar = () => {
  const { logout } = useContext(AuthContext)!
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className={styles.navbar} id={styles.navBar}>
        <ul className={styles.listNav}>
          <li>
            <NavLink to='/' className={state => state.isActive ? styles.active : ''}>
              <House size={32} cursor="pointer" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' className={state => state.isActive ? styles.active : ''}>
              <BookOpen size={32} cursor="pointer" />
            </NavLink>
          </li>
          <li>
            <Door onClick={handleLogout} size={32} cursor="pointer" />
          </li>
        </ul>
    </nav>
  )
}