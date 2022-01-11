import React from "react";
import LogInButton from "../common/LogInButton";
import { FaGithub, FaGoogle } from "react-icons/fa";

function LogIn() {
    return (
        <div>
            <div className="login__fadeout"></div>
            <div className="container">
                <form>
                    <label htmlFor="">Your email</label>
                    <input type="text" />
                    <LogInButton />
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
