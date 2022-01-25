import AchievCardSquare from "../UserProfile/Card/Data/Achievs/AchievCardSquare";
import classes from "./../../sass/components/Question/QuestionAnswer.module.scss";

function QuestionAnswer(props) {
    return (
        <div className={classes.answer}>
            <div className={classes.answer__decoration}>
                <AchievCardSquare />
                <div className={classes.answer__letter}>{props.letter}</div>
            </div>
            <div className={classes.answer__text}>Answer text</div>
        </div>
    );
}

export default QuestionAnswer;
