import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

function ToDo(props) {
	const [visible, setVisible] = React.useState(false);
	const [title, setTitle] = React.useState('');

	React.useEffect(() => {
		setTitle(props.title);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className='ToDo' draggable>
			{!visible && (
				<button onClick={() => setVisible(true)}>
					{title}
					<span>
						<FontAwesomeIcon icon={faEdit} />
					</span>
				</button>
			)}
			{visible && (
				<form onSubmit={handleSubmit}>
					<input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
					<button type='submit'>Editar</button>
					<button onClick={() => setVisible(false)}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</form>
			)}
		</div>
	);
}

export default ToDo;
