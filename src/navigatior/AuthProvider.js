import React, {createContext, useState} from 'react';
import {set} from 'react-native-reanimated';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;