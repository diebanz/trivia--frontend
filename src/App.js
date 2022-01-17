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
import Quickgame from "./pages/Quickgame";

import Footer from "./common/Footer";

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
                    {!isLoggedIn && (
                        <Route
                            exact
                            path="/quickgame"
                            element={
                                <>
                                    <Quickgame />
                                </>
                            }
                        ></Route>
                    )}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
