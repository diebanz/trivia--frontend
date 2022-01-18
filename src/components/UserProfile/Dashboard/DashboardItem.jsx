import React from "react";

import classes from "./../../../sass/components/UserProfile/Dashboard/DashboardItem.module.scss";

function DashboardItem() {
    return (
        <div className={classes.dashboard__item}>
            <div className={classes["dashboard__item--category"]}>
                Kategoria
            </div>
            <div className={classes["dashboard__item--value"]}>30</div>
            <div className={classes["dashboard__item--value"]}>40</div>
            <div className={classes["dashboard__item--value"]}>50</div>
        </div>
    );
}

export default DashboardItem;
