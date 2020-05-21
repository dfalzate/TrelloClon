import React, { Fragment } from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { useAuth0 } from '../react-auth0-spa';

const Home = () => {
	const { getTokenSilently } = useAuth0();

	const callAPI = async () => {
		const token = await getTokenSilently();
		console.log(token);
		const response = await fetch('http://localhost:3001/api/external', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response);
	};

	return (
		<Fragment>
			<button onClick={callAPI}>Token</button>
			<Hero />

			<hr />
			<Content />
		</Fragment>
	);
};

export default Home;
