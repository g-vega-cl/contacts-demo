import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useSaveDoc } from '~database';

export interface AddContactModalProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleOpen?: () => void;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AddContactModal = ({open, setOpen, handleClose}:AddContactModalProps) => {
  const {save, isSaving} = useSaveDoc('contacts');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmitUser = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      nickname: nickname
    }
    save(user);
    setOpen(false);
  }



  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={handleClose}
      open={open}
    >
      <Box sx={style}>
        <TextField id="standard-basic" label="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} variant="standard" />
        <TextField id="standard-basic" label="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} variant="standard"/>
        <TextField id="standard-basic" label="Nickname" onChange={(e) => setNickname(e.target.value)} value={nickname} variant="standard"/>
        
        <div style={{marginTop:'10px'}}>
          <Button onClick={handleSubmitUser} variant='outlined'>Add Contact</Button>
        </div>
      </Box>
    </Modal>
  );
};
