import React from "react";

import classes from "./../../../sass/components/UserProfile/Card/CardStats.module.scss";

function CardUserProfileStats() {
    return (
        <section className={classes.profile__stats}>
            <div className={classes["profile__stats--titles"]}>
                <h4 className="heading heading__4">Ranking</h4>
                <h4 className="heading heading__4">Statistics</h4>
                <h4 className="heading heading__4">Achievements</h4>
            </div>
            <div className={classes["profile__stats--data"]}></div>
        </section>
    );
}

export default CardUserProfileStats;
