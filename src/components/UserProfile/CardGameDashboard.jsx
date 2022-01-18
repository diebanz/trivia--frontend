import React from "react";

import Button from "./../../common/Button";
import DashboardItem from "./Dashboard/DashboardItem";

import styles from "./../../sass/common/Button.module.scss";
import classes from "./../../sass/components/UserProfile/CardGameDashboard.module.scss";

function CardGameDashboard() {
    return (
        <section className={classes.dashboard}>
            <div className={classes.dashboard__game}>
                <DashboardItem />
                <DashboardItem />
                <DashboardItem />
            </div>
            <div className={classes.dashboard__button}>
                <Button className={styles.btn__blue} title1="Play!" />
            </div>
        </section>
    );
}

export default CardGameDashboard;
