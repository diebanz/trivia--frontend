import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import {useAuth} from './context/loginContext';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import LogIn from './pages/LogIn';
import Warning from './pages/Warning';
import Game from './pages/Game';
import Footer from './common/Footer';
import Authors from './pages/Authors';

import './sass/app.scss';

function App() {
	const [isLoggedIn] = useAuth();

	return (
		<Router>
			<main>
				<Routes>
					<Route path='/' element={isLoggedIn ? <Navigate to='/dashboard' /> : <Home />} />

					<Route path='/login' element={isLoggedIn ? <Navigate to='/dashboard' /> : <LogIn />} />

					<Route path='/dashboard' element={isLoggedIn ? <UserProfile /> : <Navigate to='/login' />} />

					<Route path='/game' element={<Game />} />

					<Route path='/warning' element={<Warning />} />

					<Route path='/about' element={<Authors />} />

					<Route path='*' element={<Navigate to={isLoggedIn ? '/dashboard' : '/'} />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
