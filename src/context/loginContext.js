import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function Auth({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async()=>{
      const res = await axios.get('http://localhost:3003/test', {withCredentials: true})
      if(res.data) setIsLoggedIn(res.data)
    })();
  }, []);
  

  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </AuthContext.Provider>
  )
}
