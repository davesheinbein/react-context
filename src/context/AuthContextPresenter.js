import React, {
	createContext,
	useContext,
	useState,
} from 'react';

const AuthContext = createContext();

export function AuthContextPresenter({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const state = {
		isAuthenticated: authenticated,
	};
	const toggleAuth = () => {
		setAuthenticated(!authenticated);
	};

	return (
		<AuthContext.Provider
			value={{ ...state, toggleAuth: toggleAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContextPresenter() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error(
			'useAuthContextPresenter mus be used within a useAuthContextPresenter'
		);
	}

	return context;
}
