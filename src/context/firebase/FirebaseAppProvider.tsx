import React, { PropsWithChildren } from 'react';
import { FirebaseAppContext } from './useFirebaseAppContext';
import { FirebaseApp } from 'firebase/app';
import { DatabaseProvider } from '../database/DatabaseProvider';

type FirebaseProviderProps = {
  app: FirebaseApp;
};

export const FirebaseAppProvider = ({ app, children }: PropsWithChildren<FirebaseProviderProps>) => {
  return (
    <FirebaseAppContext.Provider value={app}>
      <DatabaseProvider>{children}</DatabaseProvider>
    </FirebaseAppContext.Provider>
  );
};
