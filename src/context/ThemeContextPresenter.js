import React, {
	createContext,
	useContext,
	useState,
} from 'react';

const ThemeContext = createContext();

export function ThemeContextPresenter({ children }) {
	const [darkTheme, setDarkTheme] = useState(false);
	const state = {
		isDarkTheme: darkTheme,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
	};
	const toggleTheme = () => {
		setDarkTheme(!darkTheme);
	};

	return (
		<ThemeContext.Provider
			value={{ ...state, toggleTheme: toggleTheme }}>
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
