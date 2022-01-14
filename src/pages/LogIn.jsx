import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaGoogle, FaTimesCircle } from "react-icons/fa";
import FadeOut from "../common/FadeOut";
import Card from "../common/Card";

import classes from "./../sass/pages/LogIn.module.scss";

function LogIn() {
    /* Email verification ?? */

    return (
        <div>
            <Card>
                <Link to="/">
                    <FaTimesCircle className={classes.login__icon} />
                </Link>
                <div className={classes.login__text}>
                    <h3 className="heading heading__3">
                        You need to be logged in to play like A true warrior!
                    </h3>
                    <p>No worries, we will register you on the way</p>
                </div>
                <form>
                    <label htmlFor="">Your email</label>
                    <input type="text" />
                    <button type="submit" className={classes.btn}>
                        Log in
                    </button>
                    <p>OR</p>
                </form>
                <div className={classes.login__socials}>
                    <div className={classes["login__socials--google"]}>
                        <FaGoogle />
                    </div>
                    <div className={classes["login__socials--github"]}>
                        <FaGithub />
                    </div>
                </div>
            </Card>
            <FadeOut />
        </div>
    );
}

export default LogIn;
