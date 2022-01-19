import React from "react";

import classes from "./../../../../sass/components/UserProfile/Card/Data/DataCard.module.scss";

function DataCard({ children }) {
    return <div className={classes.dataCard}>{children}</div>;
}

export default DataCard;
