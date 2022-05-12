import { Typography } from '@mui/material';
import React from 'react';
import { DocumentTitle } from '~etc';

export const NotFound = () => {
  return (
    <div>
      <DocumentTitle>Page not found</DocumentTitle>
      <Typography variant='h1'>Page not found</Typography>
      <Typography>You must look elsewhere</Typography>
    </div>
  );
};
