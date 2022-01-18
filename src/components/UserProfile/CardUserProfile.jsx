import React from "react";

import CardUserProfileStats from "./CardUserProfile/CardUserProfileStats";
import CardUserProfileUser from "./CardUserProfile/CardUserProfileUser";

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
