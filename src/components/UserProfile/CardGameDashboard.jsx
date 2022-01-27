import {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import Button from './../../common/Button';
import DashboardItem from './Dashboard/DashboardItem';
import Square from './../../common/Square';
import {useGame} from '../../context/gameContext';

import styles from './../../sass/common/Button.module.scss';
import classes from './../../sass/components/UserProfile/CardGameDashboard.module.scss';


export default function CardGameDashboard() {
	const [gameMode, setGameMode] = useState(false);
	const [categories, setCategories] = useState([]);
	const [selectedCategories, setSelectedCategories] = useGame([]);


	const categorySelection = () => {
		const quickCategories = [...selectedCategories];
		for (let i = 0; quickCategories.length < 6; i++) {
			const newCategory = categories[Math.floor(Math.random() * categories.length)];
			if (!quickCategories.find(category => category === newCategory)) quickCategories.push(newCategory);
		}
		return setSelectedCategories(quickCategories);
	};

	useEffect(() => {
		(async () => {
			try{
				const response = (await axios.get('https://opentdb.com/api_category.php')).data.trivia_categories;
				response.forEach(category =>
					category.name = category.name.startsWith('Entertainment:')
					|| category.name.startsWith('Science:')
					? category.name.slice(category.name.indexOf(' ') + 1)
					: category.name
				);
				console.log(response)
				setCategories(response);
			}catch(err){console.log(err)}
		})();
	}, []);


	return (
		<section className={classes.dashboard}>
			<div className={classes.dashboard__game}>
				<Square title='trivia' className={classes.dashboard__square} />
				{/* <DashboardItem 
					title = {'Game Timer'}
					type = {'radio'}
					values = {[
						{name: 'off'},
						{name: '10min'},
						{name: '20min'},
						{name: '30min'},
					]}
				/>
				<DashboardItem 
					title = {'Question Timer'}
					type = {'radio'}
					values = {[
						{name: 'on'},
						{name: 'off'}
					]}
				/> */}
				<DashboardItem
					title={'Game Mode'}
					values={[
						{name: 'quick', tooltip: 'get random categories', change: setGameMode},
						{name: 'custom', tooltip: 'choose your own categories', change: setGameMode},
						// {name: 'fun', change: setGameMode},
					]}
					type ={'radio'}
				/>
				{gameMode === 'custom' && categories && (
					<DashboardItem
						title={'Select categories'}
						values={[
							{name: 'Category 1'},
							{name: 'Category 2'},
							{name: 'Category 3'},
							{name: 'Category 4'},
							{name: 'Category 5'},
							{name: 'Category 6'},
						]}
						type ={'select'}
						categories = {categories}
					/>
				)}
			</div>
			<div className={classes.dashboard__button}>
				<div className={classes['dashboard__line--2']}></div>
				<Link to='/game'>
					<Button className={styles.btn__blue} title1='Play!' onClick={categorySelection} />
				</Link>
			</div>
		</section>
	);
}
