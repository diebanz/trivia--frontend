import {createContext, useContext, useState} from 'react'


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function Auth({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState('tobi');

  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </AuthContext.Provider>
  )
}
