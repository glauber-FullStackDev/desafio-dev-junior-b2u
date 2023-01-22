import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import MobileMenuItem from '../mobileMenuItem';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CarCrashIcon from '@mui/icons-material/CarCrash';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface MobileMenuProps {
  path: string
}

export default function MobileMenu({path}: MobileMenuProps) {
  const [state, setState] = React.useState({ left: false });
  const pathArray = path.split('/')

  const toggleDrawer = (
    anchor: Anchor,
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <Divider />
      <List>
        <MobileMenuItem
          name="Comprar"
          path="/"
        >
          <ShoppingBagSharpIcon
            style={{ width: '3rem', height: '3rem' }}
            color="primary"
          />
        </MobileMenuItem>
        <MobileMenuItem
          name="Vender"
          path="/sell"
        >
          <SellSharpIcon
            style={{ width: '3rem', height: '3rem' }}
            color="primary"
          />
        </MobileMenuItem>

        {
          pathArray.includes('sell') && (
            <>
              <MobileMenuItem
                name="Adicionar Carro"
                path="/sell/add"
              >
                <NoCrashIcon
                  style={{ width: '3rem', height: '3rem' }}
                  color="primary"
                />
              </MobileMenuItem>
              <MobileMenuItem
                  name="Gerenciar Carros"
                  path="/sell"
                >
                <CarCrashIcon
                  style={{ width: '3rem', height: '3rem' }}
                  color="primary"
                />
              </MobileMenuItem>
            </>
          )
        }
        
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>
        <MenuIcon
          fontSize="large"
          style={{ color: '#fff', width: '4rem', height: '4rem' }}
        />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
