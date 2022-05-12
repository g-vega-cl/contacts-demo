import React from 'react';
import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { useContacts } from './hooks/useContacts';

export const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <Stack>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button variant='outlined'>Add Contact</Button>
        <Typography>Contacts {contacts?.length || 0}</Typography>
      </Toolbar>
    </Stack>
  );
};
