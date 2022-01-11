import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import "./sass/app.scss";

import { useAuth } from "./context/loginContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Achievements from "./pages/Achievements";
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";

function App() {
    const [isLoggedIn] = useAuth();
    return (
        <Router>
            <main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Navigation />
                                <Footer />
                            </>
                        }
                    ></Route>
                    {isLoggedIn && (
                        <Route
                            exact
                            path="/achievements"
                            element={
                                <>
                                    <Achievements />
                                </>
                            }
                        ></Route>
                    )}
                    {isLoggedIn && (
                        <Route
                            exact
                            path="/userprofile"
                            element={
                                <>
                                    <UserProfile />
                                </>
                            }
                        ></Route>
                    )}
                    {!isLoggedIn && (
                        <Route
                            exact
                            path="/login"
                            element={
                                <>
                                    <LogIn />
                                </>
                            }
                        ></Route>
                    )}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
