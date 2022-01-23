import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaSignInAlt } from "react-icons/fa";
import classes from "./../sass/common/LogSquare.module.scss";

import { useAuth } from "./../context/loginContext";


function LogSquare() {
    const [isLoggedIn, setIsLoggedIn] = useAuth();
    const navigate = useNavigate();

    const logoutHandler = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/auth/logout`);
        if(res.data.message === 'logged out') {
            setIsLoggedIn(null);
            navigate('/');
        };
    }

    return (
        <div>
            <div className={classes.login__square} onClick={logoutHandler}>
                <FaSignInAlt
                    className={
                        isLoggedIn
                            ? classes.login__icon
                            : classes.logout__icon
                    }
                />
            </div>
        </div>
    );
}

export default LogSquare;
