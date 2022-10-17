import React from 'react';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const ThemeToggle = () => {
	const { toggleTheme } = useThemeContextPresenter();
	return (
		<button onClick={toggleTheme}>Toggle the Theme</button>
	);
};

export default ThemeToggle;
