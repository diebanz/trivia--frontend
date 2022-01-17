import React from "react";

import classes from "./../sass/common/Square.module.scss";

function Square(props) {
    return (
        <div>
            <div className={classes.square}>
                <h3 className="heading heading__3">{props.title}</h3>
            </div>
        </div>
    );
}

export default Square;
