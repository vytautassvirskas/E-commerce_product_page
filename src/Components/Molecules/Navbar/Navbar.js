import React from 'react';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">Collections</li>
				<li className="navigation__item">Men</li>
				<li className="navigation__item">Women</li>
				<li className="navigation__item">About</li>
				<li className="navigation__item">Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
