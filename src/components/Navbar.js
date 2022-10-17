import React from 'react';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const Navbar = () => {
	const { isDarkTheme, light, dark } =
		useThemeContextPresenter();
	const theme = isDarkTheme ? dark : light;
	return (
		<nav
			style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
