import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './common';
import { ContactList } from './contacts/ContactList';
import { Layout } from './Layout';

export const ModuleRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />} path='/'>
        <Route element={<ContactList />} path='/edit' />
        <Route element={<ContactList />} path='/' />
        <Route element={<NotFound />} path='*' />
      </Route>
    </Routes>
  );
};
