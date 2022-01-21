import React from "react";

import classes from "./../../../../../sass/components/UserProfile/Card/Data/Achives/AchievCard.module.scss";
import AchievCardSquare from "./AchievCardSquare";

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
            {/* <div
                className={classes.card__unlocked}
                style={{
                    width: `${
                        100 -
                        (data.next * 100) /
                            (values[data.unlocked.length] -
                                values[data.unlocked.length - 1])
                    }%`,
                }}
            ></div> */}
            <div className={classes.card__container}>
                <AchievCardSquare />

                <div className={classes.card__date}>
                    <p>
                        {(data.unlocked.length && (
                            <p>{data.unlocked[data.unlocked.length - 1]}</p>
                        )) ||
                            ""}
                    </p>
                </div>
            </div>
            <div className={classes.card__data}>
                <div className={classes.card__text}>
                    <h2 className={classes["card__data--title"]}>{title}</h2>
                    <h3 className={classes["card__data--condition"]}>
                        {text[0]}
                        {data.unlocked.length === values.length
                            ? values[values.length - 1]
                            : values[data.unlocked.length]}
                        {text[1]}
                    </h3>

                    {data.unlocked.length < values.length && (
                        <h4 className={classes["card__data--todo"]}>
                            <div
                                className={classes.card__progression}
                                style={{
                                    width: `${
                                        ((values[data.unlocked.length] -
                                            data.next) *
                                            100) /
                                        values[data.unlocked.length]
                                    }%`,
                                }}
                            ></div>
                            {!data.unlocked.length && values.length === 6
                                ? 0
                                : values[data.unlocked.length] - data.next}{" "}
                            / {values[data.unlocked.length]}
                        </h4>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AchievCard;

// 100% = values[data.unlocked.length]
// x% = (values[data.unlocked.length] - data.next) * 100 / values[data.unlocked.length]
