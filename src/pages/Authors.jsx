import React from "react";
import AuthorsItem from "../components/Authors/AuthorsItem";

import classes from "./../sass/pages/Authors.module.scss";

function Authors() {
    return (
        <div className={classes.container}>
            <div className={classes.item1}>
                <AuthorsItem />
            </div>
            <div className={classes.item2}>
                <AuthorsItem />
            </div>
            <div className={classes.item3}>
                <AuthorsItem />
            </div>
        </div>
    );
}

export default Authors;
