import {useState} from "react";

import classes from "./../../../sass/components/UserProfile/Dashboard/DashboardItem.module.scss";

function DashboardItem({title, values}) {
    const [active, setActive] = useState(false);

    return (
        <div className={classes.dashboard__item}>
            <h2 className={classes["dashboard__item--category"]}>
                {title}
            </h2>
            {values.map((value, i) => (
                <label key={`${value.name}${i}`}>
                    {value.name}
                    <input
                        style= {{appearance:'none'}}
                        type = {'radio'}
                        name = {value.name}
                        // onClick = {e => setActive(e.target.name)} 
                        // className = {`${classes["dashboard__item--value"]}${active === value.name ? classes.x : ''}`}
                    />
                </label>
            ))}
        </div>
    );
}

export default DashboardItem;
