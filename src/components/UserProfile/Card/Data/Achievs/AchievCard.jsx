import React from "react";

import { FaTrophy } from "react-icons/fa";

import classes from "./../../../../../sass/components/UserProfile/Card/Data/Achives/AchievCard.module.scss";

function AchievCard({ data, title, text, values }) {
    // const month = data.unlocked[data.unlocked.length - 1].toLocaleString(
    //     "en-US",
    //     { month: "long" }
    // );
    // const day = data.unlocked[data.unlocked.length - 1].toLocaleString(
    //     "en-US",
    //     { day: "2-digit" }
    // );
    // const year = data.unlocked[data.unlocked.length - 1].getFullYear();

    return (
        <div className={classes.card}>
            <div className={classes.card__container}>
                <div className={classes.card__square}></div>
                {/* <FaTrophy className={classes["card__square--icon"]} /> */}
                <div className={classes.card__date}></div>
            </div>
            <div className={classes.card__data}>
                {/* <p>{data.unlocked.length && { month }}</p> */}
                {data.unlocked.length && <p>22.22.2022</p>}
                <h2 className={classes["card__data--title"]}>{title}</h2>
                {(values[data.unlocked.length - 1] && (
                    <h3 className="heading heading__3">
                        unlocked: {values[data.unlocked.length - 1]} {title}
                    </h3>
                )) || (
                    <h4 className={classes["card__data--condition"]}>
                        to gain next level play {data.next} {text}
                    </h4>
                )}
                {!values[data.unlocked.length - 1] && (
                    <p>
                        next unlock: {data.next} {text} left
                    </p>
                )}
            </div>
        </div>
    );
}

export default AchievCard;
