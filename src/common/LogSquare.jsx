import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../context/loginContext";

import { FaSignInAlt } from "react-icons/fa";

import classes from "./../sass/common/LogSquare.module.scss";

function LogSquare() {
    const [isLoggedIn] = useAuth();
    return (
        <div>
            <Link to={isLoggedIn ? "/login" : "/"}>
                <div className={classes.login__square}>
                    <FaSignInAlt
                        className={
                            isLoggedIn
                                ? classes.logout__icon
                                : classes.login__icon
                        }
                    />
                </div>
            </Link>
        </div>
    );
}

export default LogSquare;
