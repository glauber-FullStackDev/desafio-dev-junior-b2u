import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MobileMenu from '../mobileMenu'
import bitMotorsLogo from  '../../assets/bitMotorsLogo.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../../providers/authProvider'
import { Auth } from '../../helpers/interfaces/localStorage'
import { deleteItemFromLocalStorage, getItemFromLocalStorage } from '../../services/localStorage'

export default function Header() {
    const {auth, setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const authOnLocalStorage = getItemFromLocalStorage('BitMotors_user_token') as Auth || {};
    const {pathname} = useLocation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        deleteItemFromLocalStorage('BitMotors_user_token')
        setAuth({})
        setAnchorEl(null);
        navigate('/')
    }
  return (
    <div>        
        <div
            className='w-[100vw] bg-blue-700 shadow-xl flex justify-center items-center h-20'
        >
            <div
                className='container flex justify-between items-center p-3'
            >

                <div
                    className="hidden md:flex justify-center gap-8 text-white text-xl"
                >
                    <Link to="/">Comprar</Link>
                    <Link to="/sell">Vender</Link>          
                </div>
                <div
                    className="md:hidden"
                >
                    <MobileMenu  path = {pathname || ''}/>
                </div>
               <div
                className='max-h-full object-contain'
               >
                <img 
                        className='w-full'
                        src={bitMotorsLogo} 
                        alt="lootipo da bit Motors" 
                />
               </div>
               <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Avatar
                        className='cursor-pointer' 
                        alt="remy Sharp" 
                        src={ auth.imageUrl || authOnLocalStorage.imageUrl || '' } 
                    />
                    
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleClose()}>Minha Conta</MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null)
                        navigate('/login')
                    }}>Entrar</MenuItem>
                    <MenuItem onClick={handleLogout}>Sair</MenuItem>
                </Menu>
               </div>
               
            </div>
        </div>        
    </div>
  )
}
