import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { SignupPage } from './pages/SignupPage/SignupPage';
import { useNavigate } from 'react-router-dom';
import { logout } from "./slices/auth";
import EventBus from "./common/EventBus";

function App() {

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
  
	const logOut = useCallback(() => {
	  dispatch(logout());
	}, [dispatch]);
  
	useEffect(() => {
	  if (!currentUser) {
		navigate(`/signup`);
	  }
	  EventBus.on("logout", () => {
		logOut();
	  });
  
	  return () => {
		EventBus.remove("logout");
	  };
	}, [currentUser, logOut]);

	return (
		<Routes>
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/" element={ <MainPage /> } />
			<Route path="/newsletter/:id" element={ <ShowPage /> } />
			<Route path="/newsletter/upsert/:id?" element={ <UpsertPage /> } />
			<Route path="*" element={ <NotFoundPage />} />
		</Routes>
	);
}

export default App;
