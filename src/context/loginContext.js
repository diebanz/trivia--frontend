import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function Auth({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3003/auth/check",
                    { withCredentials: true }
                );
                if (res.data.message === "success")
                    setIsLoggedIn(res.data.payload);
                if (res.data.message !== "success") setIsLoggedIn(false);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthContext.Provider>
    );
}
