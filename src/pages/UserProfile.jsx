import React from "react";

import LogSquare from "../common/LogSquare";
import CardGameDashboard from "../components/UserProfile/CardGameDashboard";
import CardUserProfile from "../components/UserProfile/CardUserProfile";

import classes from "./../sass/pages/UserProfile.module.scss";

function UserProfile() {
    return (
        <div className={classes.user}>
            <LogSquare />
            <CardUserProfile />
            <CardGameDashboard />
        </div>
    );
}

export default UserProfile;
