import React from 'react';
import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { useContacts } from './hooks/useContacts';
import { AddContactModal } from './AddContactModal';
import { Link } from 'react-router-dom';

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
          return(<li key={contact.id}><Link to="/edit">{contact?.data.firstName}</Link></li>)
        })}
        </ul>
      </div>
      <AddContactModal handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}/>
    </Stack>
  );
};
