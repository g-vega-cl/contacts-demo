import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDatabaseContext } from '~context';
import { DocumentItem, Models } from '~database';

type ContactDocument = DocumentItem<Models.Contact>;

export const useContacts = () => {
  const db = useDatabaseContext();
  const [contacts, setContacts] = useState<ContactDocument[] | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), snapshot => {
      setContacts(current => {
        let list = current || [];
        const added: ContactDocument[] = [];
        snapshot.docChanges().forEach(change => {
          const id = change.doc.id;
          const data = change.doc.data() as Models.Contact;
          const content = { id, data };
          if (change.type === 'added') {
            added.push(content);
          }
          if (change.type === 'modified') {
            const index = list.findIndex(c => c.id === id);
            list = [...list.slice(0, index), content, ...list.slice(index + 1)];
          }
          if (change.type === 'removed') {
            const index = list.findIndex(c => c.id === id);
            list.splice(index, 1);
          }
        });
        return [...list, ...added];
      });
    });
    return () => {
      unsubscribe();
    };
  }, [db, setContacts]);

  return { contacts, isGetting: contacts === null };
};
