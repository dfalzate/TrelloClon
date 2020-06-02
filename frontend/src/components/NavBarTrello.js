import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTh,
	faHome,
	faSearch,
	faPlus,
	faInfoCircle,
	faBell,
	faUser,
	faColumns,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/fontawesome-free-brands';
import {
	Button,
	InputGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

function NavBarTrello() {
	const [search, setSearch] = React.useState('');
	const [dropdownOpen, setOpen] = React.useState(false);
	const toggle = () => setOpen(!dropdownOpen);
	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	return (
		<div className='trello-header'>
			<div className='trello-leftNav'>
				<Button name='moreProducts' onClick={handleClick}>
					<FontAwesomeIcon icon={faTh} />
				</Button>
				<Button name='home' onClick={(e) => handleClick(e)}>
					<FontAwesomeIcon icon={faHome} />
				</Button>
				<Button name='boards' onClick={(e) => handleClick(e)}>
					<FontAwesomeIcon icon={faColumns} className='mr-3' />
					Tableros
				</Button>
				<InputGroup>
					<Input onChange={(e) => setSearch(e.target.value)} value={search} />
					<InputGroupAddon addonType='append'>
						<InputGroupText>
							<FontAwesomeIcon icon={faSearch} className='mr-3' />
						</InputGroupText>
					</InputGroupAddon>
				</InputGroup>
			</div>
			<div className='trello-middle'>
				<p>
					<FontAwesomeIcon icon={faTrello} className='mr-3' />
					Trello clon!
				</p>
			</div>
			<div className='trello-rightNav'>
				<Button>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
				<Button>
					<FontAwesomeIcon icon={faInfoCircle} />
				</Button>
				<Button>
					<FontAwesomeIcon icon={faBell} />
				</Button>
				<ButtonDropdown direction='left' isOpen={dropdownOpen} toggle={toggle} id='buttonUser'>
					<DropdownToggle>
						<FontAwesomeIcon icon={faUser} />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Header</DropdownItem>
						<DropdownItem disabled>Action</DropdownItem>
						<DropdownItem>Another Action</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Another Action</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</div>
		</div>
	);
}

export default NavBarTrello;
