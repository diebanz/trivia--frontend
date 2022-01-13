import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import "./sass/app.scss";

import { useAuth } from "./context/loginContext";

import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import Warning from "./pages/Warning";

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
                                <Home />
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
                    {/* {isLoggedIn && ( */}
                    <Route
                        exact
                        path="/userprofile"
                        element={
                            <>
                                <UserProfile />
                            </>
                        }
                    ></Route>
                    {/* )} */}
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
                    {!isLoggedIn && (
                        <Route
                            exact
                            path="/warning"
                            element={
                                <>
                                    <Warning />
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
