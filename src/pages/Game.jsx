import React from "react";
import LogoTrivia from "../components/Game/LogoTrivia";
import TriviaCategory from "../components/Game/TriviaCategory";
import TriviaStatsBar from "../components/Game/TriviaStatsBar";

import classes from "./../sass/pages/Game.module.scss";

function Game() {
    return (
        <div className={classes.container}>
            <div className={classes.game__nav}>
                <LogoTrivia />
                <TriviaStatsBar />
            </div>
            <div className={classes.game__container}>
                <TriviaCategory />
                <TriviaCategory />
                <TriviaCategory />
                <TriviaCategory />
                <TriviaCategory />
            </div>
        </div>
    );
}

export default Game;
