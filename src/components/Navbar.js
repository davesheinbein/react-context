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
			className='navbar'
			style={{ background: theme.ui, color: theme.syntax }}>
			<h1 className='navbar-title'>Context App</h1>
			<h3
				className='navbar-auth tooltip'
				onClick={toggleAuth}>
				{!!isAuthenticated ? 'Logged In' : 'Logged Out'}
				<span className='tooltiptext'>
					Please click! Utilizing UI, state, and useContext
					no API called
				</span>
			</h3>
			<ul>
				<li className='tooltip'>
					Home
					<span className='tooltiptext'>
						Currently Unset
					</span>
				</li>
				<li className='tooltip'>
					About
					<span className='tooltiptext'>
						Currently Unset
					</span>
				</li>
				<li className='tooltip'>
					Contact
					<span className='tooltiptext'>
						Currently Unset
					</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
