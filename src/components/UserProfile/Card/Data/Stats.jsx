import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./../../../../sass/components/UserProfile/Card/Data/Stats.module.scss";

function Stats() {
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND}/user/tobi/stats`
            );
            console.log(response.data);
            if (response.data.message === "success")
                setData(response.data.payload);
        })();
    }, []);
    return (
        <div className={classes.stats}>
            <h2 className={classes.stats__title}>Games played</h2>
            <p className={classes.stats__data}> {data && data.gamesPlayed} </p>
            <h2 className={classes.stats__title}>Total score</h2>
            <p className={classes.stats__data}> {data && data.score.total}</p>
            <h2 className={classes.stats__title}>Highscore</h2>{" "}
            <p className={classes.stats__data}>{data && data.score.high}</p>
            <h2 className={classes.stats__title}>Questions answered</h2>{" "}
            <p className={classes.stats__data}>{data && data.answers.total}</p>
            <h2 className={classes.stats__title}>Correct answers</h2>{" "}
            <p className={classes.stats__data}>
                {data && data.answers.correct}
            </p>
            <h2 className={classes.stats__title}>Categories completed</h2>
            <p className={classes.stats__data}>
                {data && data.completedCategories.total}
            </p>
            <h2 className={classes.stats__title}>
                Max completed categories in one game{" "}
            </h2>
            <p className={classes.stats__data}>
                {data && data.completedCategories.max}
            </p>
        </div>
    );
}
export default Stats;
