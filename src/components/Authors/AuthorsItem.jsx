import React from "react";

import { Link } from "react-router-dom";
import { FaGithub, FaHome, FaEnvelope } from "react-icons/fa";

import classes from "./../../sass/components/Authors/AuthorsItem.module.scss";

function AuthorsItem() {
    return (
        <div className={classes.container}>
            <div className={classes.picture}></div>
            <div className={classes.item}>
                <div className={classes.item__info}>
                    <h2>Natalia Banz</h2>
                    <h4>'Bob Ross'</h4>
                    <div className={classes["item__info--git"]}>
                        <FaGithub className={classes.item__icons} />
                        <Link to="http://github.com/diebanz">
                            <h3>github.com/diebanz</h3>{" "}
                        </Link>
                    </div>
                    <div className={classes["item__info--page"]}>
                        <FaHome className={classes.item__icons} />
                        <Link to="http://diebanz.works">
                            <h3>diebanz.works</h3>{" "}
                        </Link>
                    </div>
                    <div className={classes["item__info--email"]}>
                        <FaEnvelope className={classes.item__icons} />
                        <h3>banznatalia@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorsItem;
