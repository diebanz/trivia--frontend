import React from "react";
import LogInSquare from "../common/LogInSquare";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navi">
            <div className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list--item">
                        <div className="line line__1"></div>
                        <div className="diamond"></div>
                        <Link to="/games">
                            <h2 className="heading heading__2 navigation__list--link">
                                {" "}
                                Games
                            </h2>{" "}
                        </Link>
                    </li>
                    <li className="navigation__list--item">
                        <div className="line line__2"></div>
                        <div className="diamond"></div>
                        <Link to="/achievements">
                            <h2 className="heading heading__2 navigation__list--link">
                                Achievements
                            </h2>
                        </Link>
                    </li>
                    <li className="navigation__list--item">
                        <div className="line line__3"></div>
                        <div className="diamond"></div>
                        <Link to="/stats">
                            <h2 className="heading heading__2 navigation__list--link">
                                Ranking
                            </h2>{" "}
                        </Link>
                    </li>
                </ul>
            </div>
            <LogInSquare />
        </div>
    );
}

export default Navigation;
