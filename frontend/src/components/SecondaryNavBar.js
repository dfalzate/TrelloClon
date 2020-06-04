import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLock, faConciergeBell, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '../react-auth0-spa';
import { Button } from 'reactstrap';

function SecondaryNavBar() {
	const { user } = useAuth0();
	return (
		<div className='secondaryNavBar'>
			<div className='secondaryNavBar-left'>
				<div>{user.name}</div>
				<Button>
					<FontAwesomeIcon icon={faStar} />
				</Button>
				<Button>Personal</Button>
				<Button>
					<FontAwesomeIcon icon={faLock} />
					Privado
				</Button>
				<Button>{user.name[0]}</Button>
				<Button>Invitar</Button>
			</div>
			<div className='secondaryNavBar-rigth'>
				<Button>
					<FontAwesomeIcon icon={faConciergeBell} />
					Buttler
				</Button>
				<Button>
					<FontAwesomeIcon icon={faEllipsisH} />
					Mostrar menú
				</Button>
			</div>
		</div>
	);
}

export default SecondaryNavBar;
