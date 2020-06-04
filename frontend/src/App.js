import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Trello from './views/Trello';
import Profile from './views/Profile';
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import Context from './context/context';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = () => {
	const [lists, setLists] = React.useState([]);
	const [toDoList, setToDoList] = React.useState([]);
	const { loading } = useAuth0();

	if (loading) {
		return <Loading />;
	}

	return (
		<Context.Provider value={{ lists, setLists, toDoList, setToDoList }}>
			<Router history={history}>
				<div id='app' className='d-flex flex-column h-100'>
					<NavBar />
					<Container className='flex-grow-1 mt-5'>
						<Switch>
							<Route path='/' exact component={Home} />
							<PrivateRoute path='/trello' component={Trello} />
							<PrivateRoute path='/profile' component={Profile} />
						</Switch>
					</Container>
					{/* <Footer /> */}
				</div>
			</Router>
		</Context.Provider>
	);
};

export default App;
