import React from "react";
import Button from "../common/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";

import classes from "./../sass/pages/LogIn.scss";

function LogIn() {
    return (
        <div>
            <div className="login__fadeout"></div>
            <div className="container">
                <form>
                    <label htmlFor="">Your email</label>
                    <input type="text" />
                    <Button />
                </form>
                <div className="login__socials">
                    <div>
                        <FaGoogle />
                    </div>
                    <div>
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
