import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Context from '../context/context';

function TrelloList() {
	const { lists, setLists } = React.useContext(Context);
	const [visibleCreate, setVisibleCreate] = React.useState(false);
	const [title, setTitle] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const list = { title };
		setLists([...lists, list]);
		setVisibleCreate(!visibleCreate);
		setTitle('');
	}

	return (
		<div className='create-trello-list'>
			{!visibleCreate && (
				<div className='trello-list__title'>
					<button onClick={() => setVisibleCreate(!visibleCreate)}>
						<FontAwesomeIcon icon={faPlus} />
						Añadir lista
					</button>
				</div>
			)}
			{visibleCreate && (
				<div>
					<div className='trello-list__title'>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder='Título de la lista'
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								required
							></input>
							<button type='submit'>Crear</button>
							<button onClick={() => setVisibleCreate(!visibleCreate)}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

export default TrelloList;
