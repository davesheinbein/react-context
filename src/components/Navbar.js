import React from 'react';
import { useAuthContextPresenter } from '../context/AuthContextPresenter';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const Navbar = () => {
	const { isDarkTheme, light, dark } =
		useThemeContextPresenter();
	const { isAuthenticated, toggleAuth } =
		useAuthContextPresenter();
	const theme = isDarkTheme ? dark : light;
	return (
		<nav
			style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<h3 className='tooltip' onClick={toggleAuth}>
				{!!isAuthenticated ? 'Logged In' : 'Logged Out'}
				<span className='tooltiptext'>
					Please click! Utilizing UI, state, and useContext
					no API called
				</span>
			</h3>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
