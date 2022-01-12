import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../common/LogInButton";

import classes from "./../sass/pages/Home.module.scss";

function Home() {
    return (
        <div className={classes.container}>
            <Navigation />
            <div>
                <h1 className="heading heading__1">
                    Did you come to waste some time?
                </h1>
                <Button title="Play" />
                <Button title="Log In" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
