import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeContextPresenter({ children }) {
	const state = {
		isDarkTheme: false,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
	};

	return (
		<ThemeContext.Provider value={state}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContextPresenter() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error(
			'useThemeContextPresenter mus be used within a useThemeContextPresenter'
		);
	}

	return context;
}
