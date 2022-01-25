import Card from "../common/Card";
import QuestionAnswer from "../components/Question/QuestionAnswer";
import FadeOut from "./../common/FadeOut";

import classes from "./../sass/pages/Question.module.scss";

function Question() {
    return (
        <div>
            <Card>
                <div className={classes.question}>Question</div>
                <div className={classes.question__container}>
                    <QuestionAnswer letter="A" />

                    <QuestionAnswer letter="B" />
                </div>
                <div className={classes.question__container}>
                    <QuestionAnswer letter="C" />
                    <QuestionAnswer letter="D" />
                </div>
            </Card>
            <FadeOut />
        </div>
    );
}

export default Question;
