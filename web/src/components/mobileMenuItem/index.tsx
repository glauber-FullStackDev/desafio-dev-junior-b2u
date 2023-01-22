import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    name: string
    path: string
    children: ReactNode
}

export default function MobileMenuItem({ name, path, children }: Props) {
  return (
    <Link to={path}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {children}
          </ListItemIcon>
          <ListItemText
            color="primary"
            primary={name}
            style={{
              fontSize: '18px',
            }}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
