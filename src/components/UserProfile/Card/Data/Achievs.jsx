import { useEffect, useState } from "react";
import axios from "axios";

import AchievCard from "./Achievs/AchievCard";
import classes from "./../../../../sass/components/UserProfile/Card/Data/Achievs.module.scss";

function Achievs() {
    const [data, setData] = useState();
    const [allUnlocked, setAllUnlocked] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND}/user/tobi/achievs`
            );
            if (response.data.message === "success") {
                setData(response.data.payload);
                if (
                    response.data.payload.gamesPlayed.unlocked.length === 3 &&
                    response.data.payload.score.high.unlocked.length === 3 &&
                    response.data.payload.score.total.unlocked.length === 3 &&
                    response.data.payload.correctAnswers.unlocked.length ===
                        3 &&
                    response.data.payload.completedCategories.total.unlocked
                        .length === 3 &&
                    response.data.payload.completedCategories.max.unlocked
                        .length === 6
                )
                    setAllUnlocked(true);
            }
        })();
    }, []);
    return (
        <>
            {data && !allUnlocked && (
                <div className={classes.achievements}>
                    <AchievCard
                        title="Games played"
                        text="games"
                        values={[100, 200, 300]}
                        data={data.gamesPlayed}
                    />
                    <AchievCard
                        title="HighScore"
                        text="points"
                        values={[100, 200, 300]}
                        data={data.score.high}
                    />
                    <AchievCard
                        title="Total score"
                        text="points"
                        values={[100, 200, 300]}
                        data={data.score.total}
                    />
                    <AchievCard
                        title="Correct answers"
                        text="correct answers"
                        values={[100, 200, 300]}
                        data={data.correctAnswers}
                    />
                    <AchievCard
                        title="Completed categories"
                        text="completed categories"
                        values={[100, 200, 300]}
                        data={data.completedCategories.total}
                    />
                    <AchievCard
                        title="Completed categories in one game"
                        text="none"
                        values={[1, 2, 3, 4, 5, 6]}
                        data={data.completedCategories.max}
                    />
                </div>
            )}
            {data && allUnlocked && (
                <AchievCard title="All Achievements" data={data.all} />
            )}
        </>
    );
}
export default Achievs;
