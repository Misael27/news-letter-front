import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import MainPage from './pages/NewsLetter/MainPage/MainPage'
import ShowPage from './pages/NewsLetter/ShowPage/ShowPage'
import UpsertPage from './pages/NewsLetter/UpsertPage/UpsertPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <MainPage /> } />
				<Route path="/newsletter/:id" element={ <ShowPage /> } />
				<Route path="/newsletter/upsert/:id?" element={ <UpsertPage /> } />
				<Route path="*" element={ <NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
