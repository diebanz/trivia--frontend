import React from "react";
import LogoTrivia from "../components/Game/LogoTrivia";

import classes from "./../sass/pages/Game.module.scss";

function Game() {
    return (
        <div className={classes.container}>
            <LogoTrivia />
        </div>
    );
}

export default Game;
