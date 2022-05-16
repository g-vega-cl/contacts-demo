import React, { useState } from 'react';
import { Button, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { useContacts } from './hooks/useContacts';
import { AddContactModal } from './AddContactModal';
import { Link } from 'react-router-dom';

export interface EditContactModalProps {
  firstName: string,
  lastName: string,
  nickname: string,
}

export const EditContact = ({firstName, lastName, nickname}:EditContactModalProps) => {
  // const [newFirstName, setFirstName] = useState(firstName);
  // const [newLastName, setLastName] = useState(lastName);
  // const [newNickname, setNickname] = useState(nickname);

  return (
    <Stack margin={'50px'}>
          <TextField id="standard-basic" label="First Name" onChange={(e) => setFirstName(e.target.value)} value={newFirstName} variant="standard" />
          <TextField id="standard-basic" label="Last Name" onChange={(e) => setLastName(e.target.value)} value={newLastName} variant="standard"/>
          <TextField id="standard-basic" label="Nickname" onChange={(e) => setNickname(e.target.value)} value={newNickname} variant="standard"/>
          
          <div style={{marginTop:'10px'}}>
            <Button variant='outlined'>Edit Contact</Button>
          </div>
    </Stack>
  );
};
