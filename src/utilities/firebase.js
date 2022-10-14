import { useCallback, useState, useEffect } from 'react';
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

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(db, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(db, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [db, path]);

  return [updateData, result];
};