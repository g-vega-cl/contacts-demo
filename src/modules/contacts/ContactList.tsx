import React from 'react';
import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { useContacts } from './hooks/useContacts';
import { AddContactModal } from './AddContactModal';

export const ContactList = () => {
  const { contacts } = useContacts();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button onClick={handleOpen} variant='outlined'>Add Contact</Button>
        <Typography>Contacts {contacts?.length || 0}</Typography>
      </Toolbar>
      <div>
        <ul>
        {contacts?.map((contact) => {
          return(<li key={contact.id}>{contact?.data.firstName}</li>)
        })}
        </ul>
      </div>
      <AddContactModal handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}/>
    </Stack>
  );
};
