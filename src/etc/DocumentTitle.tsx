import React from 'react';
import { Helmet } from 'react-helmet';

export const DocumentTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};
