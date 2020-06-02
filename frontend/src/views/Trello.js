import React from 'react';
import '../styles/trello.css';
import NavBar from '../components/NavBarTrello';
import SecondaryNavBar from '../components/SecondaryNavBar';

function TrelloPage() {
	React.useEffect(() => {}, []);

	return (
		<div className='trello'>
			<NavBar />
			<SecondaryNavBar />
		</div>
	);
}

export default TrelloPage;
