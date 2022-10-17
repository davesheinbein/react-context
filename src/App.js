import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { ThemeContextPresenter } from './context/ThemeContextPresenter';

function App() {
	return (
		<div className='App'>
			<ThemeContextPresenter>
				<Navbar />
				<BookList />
			</ThemeContextPresenter>
		</div>
	);
}

export default App;
