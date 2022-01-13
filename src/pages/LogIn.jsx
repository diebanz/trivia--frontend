import React from "react";
import Button from "../common/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import FadeOut from "../common/FadeOut";

import classes from "./../sass/pages/LogIn.scss";
import Card from "../common/Card";

function LogIn() {
    return (
        <div>
            <Card>
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
            </Card>
            <FadeOut />
        </div>
    );
}

export default LogIn;
