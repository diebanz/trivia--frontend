import {useEffect, useState} from 'react';
import axios from 'axios';

import Question from '../components/Game/Question';
import { useGame } from "../context/gameContext";

import classes from './../sass/pages/Game.module.scss';

export default function Game() {
	const [selectedCategories] = useGame();
	// const [isLoading, setIsLoading] = useState(true);
	const [score, setScore] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([[], [], [], [], [], []]);
	const [showQuestion, setShowQuestion] = useState(false);

	useEffect(() => {
		if(questions.length === 6) setIsLoading(false)
	}, [questions]);

	// fetch questions
  useEffect(() => { 
		try{
			selectedCategories.forEach(async(category, i) => {

				const easy = (
					await axios(`https://opentdb.com/api.php?amount=2&category=${category.id}&difficulty=easy`)
					).data.results;

				const medium = (
					await axios(`https://opentdb.com/api.php?amount=2&category=${category.id}&difficulty=medium`)
				).data.results;

				const hard = (
					await axios(`https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=hard`)
				).data.results;
				// console.log(i, easy.length, medium.length, hard.length, questions.length)
				// setQuestions([...questions, questions[i] = [...easy, ...medium, ...hard]]);
				const promise = new Promise((res, rej) =>{
					if(easy && medium && hard && questions.length === i)
						res(setQuestions([...questions, questions[i] = [...easy, ...medium, ...hard]]))
				});
				promise.then(() => console.log('message'))
			});
		}catch(err){console.log(err)}
  }, [selectedCategories]);

	// calc score
	useEffect(() => {
		let calcScore = 0;
		const correctCats = [];
		answers.forEach(category => {
			category.forEach((question, qIndex) => {
				if(question) calcScore += (qIndex + 1) * 100;
				if(question && qIndex === 4 && correctCats.length < 6)
					correctCats.push(100 + correctCats.length * 100);
				if(correctCats.length === 6) correctCats[5] += 11;
			})
		})
		for (let i in correctCats) calcScore += correctCats[i];
		calcScore += correctCats.reduce((sum, cat) => sum + cat, 0);
		setScore(calcScore);
	}, [answers]);


	return (
		<>
			<h1>GAME</h1>
			<p>score : {score}</p>
			{/* {isLoading && <h1>loading</h1>} */}
			{!isLoading && questions.length === 6 &&
				selectedCategories.map((category, i) => {
					return (
						<div key = {`${category}${i}`}>
							<h3>{category.name}</h3>
							{questions[i].map((question, j) => {
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
								})
							}
						</div>
					)
				})
			}
			{showQuestion && <Question question = {showQuestion} answer = {setAnswers} reset = {setShowQuestion} />}
		</>
	)
}
