import {useState} from "react";
import axios from "axios";

import { useAuth } from "../../../context/loginContext";
import classes from "./../../../sass/components/UserProfile/Dashboard/DashboardItem.module.scss";


function DashboardItem({title, values, type, categories}) {
    const [currentUser] = useAuth();

    const changeHandler = async (target, value) => {
        if(type === 'radio') value.change(value.name);
        // await axios.post(`${process.env.REACT_APP_BACKEND}/user/${currentUser}`, {
        //     updates: {
        //         options: {
        //             title: target.value,
        //         }
        //     }
        // });

    }

    return (
        <div className={classes.dashboard__item}>
            <h2 className={classes["dashboard__item--category"]}>
                {title}
            </h2>
            {values.map((value, i) => {
                if(type === 'radio') return(
                    <label key={`${value.name}${i}`} className={classes["dashboard__item--value"]}>
                        {value.name}
                        <input
                            type = {'radio'}
                            name = {title}
                            onChange={e => changeHandler(e.target, value)}
                        />
                    </label>
                );
                if(type === 'select') return (
                    <select key={`${value.name}${i}`} onChange={e => changeHandler(e.target, value)} 
                    className={classes["dashboard__item--select"]}>
                        {categories.map(category => (
                            <option value={category.name} key={category.id}>{category.name} </option>
                        ))}
                    </select>
                )
            })}
        </div>
    );
}

export default DashboardItem;
