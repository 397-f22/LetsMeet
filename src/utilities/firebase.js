import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBspAveJg8sXsKNcMSeH9EuLC48vbaSmkk',
  authDomain: 'letsmeet-51304.firebaseapp.com',
  databaseURL: 'https://letsmeet-51304-default-rtdb.firebaseio.com',
  projectId: 'letsmeet-51304',
  storageBucket: 'letsmeet-51304.appspot.com',
  messagingSenderId: '517774577396',
  appId: '1:517774577396:web:61cfdead55e41ef75d18a1',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const useRtdbData = (path, dependency) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onValue(ref(db, path), (snapshot) => {
        setData(snapshot.val());
        setIsLoading(false);
      }),
    [dependency]
  );

  return [data, isLoading];
};
