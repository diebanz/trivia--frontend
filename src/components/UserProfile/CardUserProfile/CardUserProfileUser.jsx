import React from "react";

import { FaEdit } from "react-icons/fa";

import classes from "./../../../sass/components/UserProfile/Card/CardUser.module.scss";

function CardUserProfileUser() {
    return (
        <section className={classes.profile__user}>
            <div className={classes["profile__user--piccontainer"]}>
                <div className={classes["profile__user--pic"]}></div>
                <div className={classes["profile__user--year"]}>1988</div>
            </div>
            <div className={classes["profile__user--namecontainer"]}>
                <div className={classes["profile__user--name"]}>Crazy CAT</div>
                <div className={classes["profile__user--email"]}>
                    Crazy CAT@catcat.at
                </div>
                <div className={classes["profile__user--statcontainer"]}>
                    <div className={classes["profile__user--recentachiev"]}>
                        Warmed up!
                    </div>
                    <div className={classes["profile__user--currentrank"]}>
                        Rank 10
                    </div>
                </div>
            </div>
            <div className={classes["profile__user--iconcontainer"]}>
                <FaEdit className={classes["profile__user--icon"]} />
            </div>
        </section>
    );
}

export default CardUserProfileUser;
