import AchievCardSquare from "../UserProfile/Card/Data/Achievs/AchievCardSquare";
import classes from "./../../sass/components/Question/QuestionAnswer.module.scss";

function QuestionAnswer() {
    return (
        <div className={classes.answer}>
            <AchievCardSquare />
            <div className={classes.answer__text}>
                <p>Nananan</p>
            </div>
        </div>
    );
}

export default QuestionAnswer;
