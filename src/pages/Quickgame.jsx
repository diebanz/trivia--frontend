import React from "react";
import CardGameDashboard from "../components/UserProfile/CardGameDashboard";
import LogSquare from "./../common/LogSquare";

import classes from "./../sass/pages/Quickgame.module.scss";

function Quickgame() {
    return (
        <div className={classes.container}>
            <LogSquare />
            <CardGameDashboard />
        </div>
    );
}

export default Quickgame;
