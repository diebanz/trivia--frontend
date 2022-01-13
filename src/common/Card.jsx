import React from "react";

import classes from "./../sass/common/Card.module.scss";

function Card({ children }) {
    return <div className={classes.card}>{children}</div>;
}

export default Card;
