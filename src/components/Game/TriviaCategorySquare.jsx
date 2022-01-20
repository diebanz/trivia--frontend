import React from "react";

import classes from "./../../sass/components/Game/TriviaCategorySquare.module.scss";

function TriviaCategorySquare(props) {
    return (
        <div className={classes.category__square}>
            <div
                className={`${classes["category__card--front"]} ${classes["category__card"]}`}
            >
                <h4 className={classes["category__square--text"]}>
                    {props.amount}
                </h4>
            </div>
            {/* <div
                className={`${classes["category__card--back"]} ${classes["category__card"]}`}
            >
                <h4 className={classes["category__square--text"]}>Go for it</h4>
            </div> */}
        </div>
    );
}

export default TriviaCategorySquare;
