import React from 'react';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const ThemeToggle = () => {
	const { isDarkTheme, light, dark, toggleTheme } =
		useThemeContextPresenter();
	const theme = isDarkTheme ? dark : light;
	return (
		<div
			className='theme-toggle'
			style={{ background: theme.ui, color: theme.syntax }}>
			<button
				className='theme-toggle-btn'
				onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	);
};

export default ThemeToggle;
