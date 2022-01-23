import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import "./sass/app.scss";

import { useAuth } from "./context/loginContext";

import Home from "./pages/Home";

import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import Warning from "./pages/Warning";
import Game from "./pages/Game";

import Footer from "./common/Footer";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useAuth();


    return (
        <Router>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={ isLoggedIn ? <Navigate to='/dashboard' /> : <Home />}
                    />
                    <Route
                        path="/dashboard"
                        element={ isLoggedIn ? <UserProfile /> : <Navigate to='/login' />}
                    />
                    <Route
                        path="/login"
                        element={ isLoggedIn ? <Navigate to='/dashboard'  /> : <LogIn />}
                    />
                    <Route
                        path="/warning"
                        element={<Warning />}
                    />
                    <Route
                        path="/game"
                        element={<Game />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to={isLoggedIn ? '/dashboard' : '/'} />} 
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
