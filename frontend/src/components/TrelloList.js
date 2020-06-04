import React from 'react';
import ToDo from '../components/ToDo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Context from '../context/context';

function TrelloList(props) {
	const { toDoList, setToDoList } = React.useContext(Context);
	const [visible, setVisible] = React.useState(false);
	const [title, setTitle] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const newToDo = {
			title,
		};
		setToDoList([...toDoList, newToDo]);
		setTitle('');
		setVisible(false);
	}

	return (
		<div className='trello-list' draggable>
			<div className='trello-list__title'>{props.title}</div>
			{toDoList.length > 0 &&
				toDoList.map((toDo, index) => <ToDo key={index} title={toDo.title} />)}
			<div className='trello-list__footer'>
				{!visible && (
					<button onClick={(e) => setVisible(!visible)}>
						<FontAwesomeIcon icon={faPlus} />
						Añadir tarea
					</button>
				)}
				{visible && (
					<form onSubmit={handleSubmit}>
						<input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
						<button type='submit'>Crear</button>
						<button onClick={() => setVisible(!visible)}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default TrelloList;
