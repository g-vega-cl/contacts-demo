import { AppBar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Stack>
      <AppBar position='static' title='Contact Manager'>
        <Typography variant='h6'>Contacts Manager</Typography>
      </AppBar>
      <Outlet />
    </Stack>
  );
};
