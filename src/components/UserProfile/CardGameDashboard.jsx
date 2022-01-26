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
			console.log(newCategory)
			if (!quickCategories.find(category => category === newCategory)) quickCategories.push(newCategory);
		}
		console.log(quickCategories)
		return setSelectedCategories(quickCategories);
	};
	// fetch all categories
	useEffect(() => {
		(async () => {
			try{
				const response = await axios.get('https://opentdb.com/api_category.php');
				setCategories(response.data.trivia_categories);
			}catch(err){console.log(err)}
		})();
	}, []);

	return (
		<section className={classes.dashboard}>
			<div className={classes.dashboard__game}>
				<Square title='trivia' className={classes.dashboard__square} />
				<DashboardItem
					title={'Game Mode'}
					values={[
						{name: 'quick', click: setGameMode},
						{name: 'custom', click: setGameMode},
					]}
				/>
				{gameMode && (
					<DashboardItem
						title={'Select categories:'}
						values={['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']}
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
