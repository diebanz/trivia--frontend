import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./../../../../../sass/components/UserProfile/Card/Data/Achives/AchievCardSquare.module.scss";

function AchievCardSquare() {
    return (
        <div className={classes.square}>
            <FontAwesomeIcon icon="fa-solid fa-a" />
        </div>
    );
}

export default AchievCardSquare;
