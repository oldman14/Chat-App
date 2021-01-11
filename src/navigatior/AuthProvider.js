import React, {createContext, useState, useEffect} from 'react';
import {set} from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState();

  const onAuthStateChanged = (user) => {
    console.log(user);
    // if (initialRouteName) setInitializing(false);
    if (user) setIsAuth(true);
    else setIsAuth(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  console.log(isAuth);
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
