import React from 'react';
import Cart from '../../Atoms/Cart/Cart';
import Logo from '../../Atoms/Logo/Logo';
import User from '../../Atoms/User/User';
import Navbar from '../../Molecules/Navbar/Navbar';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo-nav-wrapper">
				<Logo />
				<Navbar />
			</div>
			<div className="header__user-cart-wrapper">
				<Cart color={"#69707D"} hover={true} />
				<div className="header__user-img-wrapper">
					<User />
				</div>
			</div>
		</header>
	);
};

export default Header;
