import React from "react";

import LogSquare from "../common/LogSquare";
import CardGameDashboard from "../components/UserProfile/CardGameDashboard";
import CardUserProfile from "../components/UserProfile/CardUserProfile";

import "./../sass/pages/UserProfile.module.scss";

function UserProfile() {
    return (
        <div>
            <CardUserProfile />
            <CardGameDashboard />
            <LogSquare />
        </div>
    );
}

export default UserProfile;
