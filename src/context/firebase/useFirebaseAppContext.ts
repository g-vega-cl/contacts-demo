import { useContext, createContext } from 'react';
import { FirebaseApp } from 'firebase/app';

export const FirebaseAppContext = createContext<FirebaseApp | null>(null);
export const useFirebaseAppContext = () => useContext(FirebaseAppContext) as FirebaseApp;
