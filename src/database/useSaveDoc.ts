import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { useDatabaseContext } from '~context';
import { DocumentTypes, Model } from './types';

export const useSaveDoc = <TModel = Model>(documentName: DocumentTypes) => {
  const db = useDatabaseContext();
  const [isSaving, setIsSaving] = useState(false);

  const save = useCallback(
    async (data: TModel, id?: string) => {
      setIsSaving(true);
      const docId = id || (data as { id?: string }).id;
      if (docId) {
        await setDoc(doc(db, documentName, docId), data, { merge: true });
        setIsSaving(false);
        return docId;
      } else {
        const result = await addDoc(collection(db, documentName), data);
        setIsSaving(false);
        return result.id;
      }
    },
    [db, documentName],
  );

  return { save, isSaving };
};
