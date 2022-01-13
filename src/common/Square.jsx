import React from "react";

import classes from "./../sass/common/Square.module.scss";

function Square(props) {
    return (
        <div>
            <div className={classes.square}>
                <h2 className="heading heading__2">{props.title}</h2>
            </div>
        </div>
    );
}

export default Square;
