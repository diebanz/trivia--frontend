import {useEffect, useState} from 'react';
import axios from 'axios';

import Question from '../components/Game/Question';
import { useGame } from "../context/gameContext";

import classes from './../sass/pages/Game.module.scss';

export default function Game() {
	const [selectedCategories, setSelectedCategories] = useGame();
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([[], [], [], [], [], []]);
	const [showQuestion, setShowQuestion] = useState(false);

	// fetch questions
  useEffect(() => { 
		try{
			selectedCategories.forEach((category, i) => {
				(async () => {
					const easy = (
						await axios(`https://opentdb.com/api.php?amount=2&category=${category.id}&difficulty=easy`)
						).data.results;

					const medium = (
						await axios(`https://opentdb.com/api.php?amount=2&category=${category.id}&difficulty=medium`)
					).data.results;

					const hard = (
						await axios(`https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=hard`)
					).data.results;
					setQuestions([...questions, questions[i] = [...easy, ...medium, ...hard]]);
				})();
			});
		}catch(err){console.log(err)}
  }, []);



	return (
		<>
			<h1>GAME</h1>
			<p>score : 0</p>
			{questions
			&& questions[0]
			&& questions[0].length === 5
			&& questions[1]
			&& questions[1].length === 5
			&& questions[2]
			&& questions[2].length === 5
			&& questions[3]
			&& questions[3].length === 5
			&& questions[4]
			&& questions[4].length === 5
			&& questions[5]
			&& questions[5].length === 5
			&& !showQuestion &&
				selectedCategories.map((category, i) => {
					return (
						<div key = {`${category}${i}`}>
							<h3>{category.name}</h3>
							{questions[i].reverse().map((question, j) => {
								j = questions[i].length -1 - j;
								let state = false;
								if(j === 0 && !answers[i].length) state = true;
								if(j !== 0 && answers[i].length === j && answers[i][j-1] === true) state = true;
								return (
									<button
										key = {`${question}${j}`}
										disabled = {!state}
										onClick = {() => setShowQuestion(question)}
									>
										{(j + 1) * 100}
									</button>
								)
							})}
						</div>
					)
				})
			}
			{showQuestion && <Question question = {showQuestion} answer = {setAnswers} reset = {setShowQuestion} />}
		</>
	)
}




