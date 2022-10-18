import React, { useEffect, useState } from 'react';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const ThemeToggle = () => {
	const [randomColor, setRandomColor] = useState(
		'#' + Math.floor(Math.random() * 0xffffff).toString(16)
	);
	const { isDarkTheme, light, dark, toggleTheme } =
		useThemeContextPresenter();
	const theme = isDarkTheme ? dark : light;
	useEffect(() => {
		setRandomColor(
			'#' +
				Math.floor(Math.random() * 0xffffff).toString(16)
		);
		document.getElementById('root').style.background =
			randomColor;
	}, [isDarkTheme]);

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
