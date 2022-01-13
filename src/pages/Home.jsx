import React from "react";

import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../common/Footer";
import Button from "../common/Button";

import classes from "./../sass/pages/Home.module.scss";
import styles from "./../sass/common/Button.module.scss";

function Home(props) {
    const [title1, setTitle1] = useState("Play!");
    const [title2, setTitle2] = useState("Log in!");

    console.log(title1);
    console.log(title2);

    const titles = [
        ["Just messing around...", "Getting serious, roar!"],
        ["Be sweet! Be cute!", "Be aggressive! Be Brutal!"],
        ["Flower power", "Kill them all!"],
        ["Everyone's a winner", "The Winner takes it aaaall!"],
        ["Relax, take it easy!", "Under pressure"],
        ["Look at the top", "Be on the top!"],
    ];

    const hoverHandler = (props) => {
        setTitle1("");
    };

    return (
        <div>
            <Navigation />
            <div className={classes.container}>
                <h1 className="heading heading__1">
                    Did you come to waste some time?
                </h1>

                <div className={classes.container__buttons}>
                    <Link to="/warning">
                        <Button
                            className={styles.btn__blue}
                            type="submit"
                            onMouseEnter={hoverHandler}
                            // title={titles[Math.floor(Math.random() * 6)][0]}
                            title1="PLAY!"
                        />
                    </Link>
                    <Link to="/login">
                        <Button
                            type="submit"
                            // title={titles[Math.floor(Math.random() * 6)][1]}
                            title2="Log in"
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
