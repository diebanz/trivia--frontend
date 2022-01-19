import React from "react";

import { FaTrophy } from "react-icons/fa";

import classes from "./../../../../../sass/components/UserProfile/Card/Data/Achives/AchievCard.module.scss";

function AchievCard({ data, title, text, values }) {
    const month = data.unlocked[data.unlocked.length - 1].toLocaleString(
        "en-US",
        { month: "long" }
    );
    const day = data.unlocked[data.unlocked.length - 1].toLocaleString(
        "en-US",
        { day: "2-digit" }
    );
    const year = data.unlocked[data.unlocked.length - 1].getFullYear();

    return (
        <div className={classes.card}>
            <div className={classes.card__container}>
                <div className={classes.card__square}></div>
                <FaTrophy className={classes["card__icon"]} />
                <div className={classes.card__date}></div>
            </div>
            <div className={classes.card__data}>
                <p>{data.unlocked.length && { month }}</p>
                <h2>{title}</h2>
                <h3>
                    unlocked: {values[data.unlocked.length]}
                    {title}
                </h3>
                <p>
                    {data.next} {text}
                    <br /> until the next unlock!
                </p>
            </div>
        </div>
    );
}

export default AchievCard;
