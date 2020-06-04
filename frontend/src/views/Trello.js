import React from 'react';
import '../styles/trello.css';
import NavBar from '../components/NavBarTrello';
import SecondaryNavBar from '../components/SecondaryNavBar';
import CreateTrelloList from '../components/CreateTrelloList';
import TrelloList from '../components/TrelloList';
import Context from '../context/context';

function TrelloPage() {
	const { lists } = React.useContext(Context);

	return (
		<div className='trello'>
			<NavBar />
			<SecondaryNavBar />
			<div className='trello-board'>
				{lists.length > 0 &&
					lists.map((list, index) => <TrelloList key={index} title={list.title} />)}
				<CreateTrelloList />
			</div>
		</div>
	);
}

export default TrelloPage;
