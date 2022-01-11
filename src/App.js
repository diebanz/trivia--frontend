import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./sass/app.scss";

import Navigation from "./components/Navigation";
import Achievements from "./pages/Achievements";
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";

function App() {
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
                            </>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/achievements"
                        element={
                            <>
                                <Achievements />
                            </>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/userprofile"
                        element={
                            <>
                                <UserProfile />
                            </>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={
                            <>
                                <LogIn />
                            </>
                        }
                    ></Route>
                </Routes>
            </main>
        </Router>
    );
}

export default App;
