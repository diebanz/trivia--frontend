import React from "react";

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
            <div
                className={classes.card__unlocked}
                style={{
                    width: `${
                        100 -
                        (data.next * 100) /
                            (values[data.unlocked.length] -
                                values[data.unlocked.length - 1])
                    }%`,
                }}
            ></div>
            <div className={classes.card__container}>
                <div className={classes.card__square}></div>

                <div className={classes.card__date}></div>
            </div>
            <div className={classes.card__data}>
                <div className={classes.card__date}>
                    {(data.unlocked.length && (
                        <p>{data.unlocked[data.unlocked.length - 1]}</p>
                    )) ||
                        ""}
                </div>
                <div className={classes.card__text}>
                    <h2 className={classes["card__data--title"]}>{title}</h2>
                    <h3 className={classes["card__data--condition"]}>
                        {text[0]}
                        {values[data.unlocked.length]}
                        {text[1]}
                    </h3>

                    <h4 className={classes["card__data--todo"]}>
                        {" "}
                        <div
                            className={classes.card__progression}
                            style={{ width: `${100 - data.next}%` }}
                        ></div>
                        {data.next} / 10
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default AchievCard;
