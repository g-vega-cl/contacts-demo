import { useContext, createContext } from 'react';
import { Firestore } from 'firebase/firestore';

export const DatabaseContext = createContext<Firestore | null>(null);
export const useDatabaseContext = () => useContext(DatabaseContext) as Firestore;
