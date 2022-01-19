import React from "react";

import CardUserProfileStats from "./Card/CardUserProfileStats";
import CardUserProfileUser from "./Card/CardUserProfileUser";

import classes from "./../../sass/components/UserProfile/CardUserProfile.module.scss";

function CardUserProfile() {
    return (
        <section className={classes.profile}>
            <CardUserProfileUser />
            <CardUserProfileStats />
        </section>
    );
}

export default CardUserProfile;
