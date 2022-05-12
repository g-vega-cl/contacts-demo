import { getFirestore } from 'firebase/firestore';
import React, { PropsWithChildren } from 'react';
import { useFirebaseAppContext } from '../firebase/useFirebaseAppContext';
import { DatabaseContext } from './useDatabaseContext';

export const DatabaseProvider = ({ children }: PropsWithChildren<Record<never, unknown>>) => {
  const app = useFirebaseAppContext();
  const db = getFirestore(app);

  return <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>;
};
