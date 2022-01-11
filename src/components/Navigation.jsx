import React from "react";
import LogInSquare from "../common/LogInSquare";

function Navigation() {
    return (
        <div className="navi">
            <div className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list--link">Games</li>
                    <li className="navigation__list--link">Achievements</li>
                    <li className="navigation__list--link">Ranking</li>
                </ul>
            </div>
            <LogInSquare />
        </div>
    );
}

export default Navigation;
