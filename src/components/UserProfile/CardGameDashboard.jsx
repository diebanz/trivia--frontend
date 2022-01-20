import React from "react";

import { Link } from "react-router-dom";
import Button from "./../../common/Button";
import DashboardItem from "./Dashboard/DashboardItem";
import Square from "./../../common/Square";

import styles from "./../../sass/common/Button.module.scss";
import classes from "./../../sass/components/UserProfile/CardGameDashboard.module.scss";

function CardGameDashboard() {
    return (
        <section className={classes.dashboard}>
            <div className={classes.dashboard__game}>
                <Square title="trivia" className={classes.dashboard__square} />
                <DashboardItem />
                <DashboardItem />
                <DashboardItem />
            </div>
            <div className={classes.dashboard__button}>
                <div className={classes["dashboard__line--2"]}></div>
                <Link to="/game">
                    <Button className={styles.btn__blue} title1="Play!" />
                </Link>
            </div>
        </section>
    );
}

export default CardGameDashboard;
