import React from "react";

import classes from "./../../sass/components/Game/TriviaCategorySquare.module.scss";

function TriviaCategorySquare(props) {
    return <div className={classes.category__square}>{props.amount}</div>;
}

export default TriviaCategorySquare;
