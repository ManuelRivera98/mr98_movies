import { useState, useEffect } from 'react';
import firebase from '../firebase/context';

function useAuth() {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.app.onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return userAuth;
}

export default useAuth;
