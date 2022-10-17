import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { AuthContextPresenter } from './context/AuthContextPresenter';
import { BookContextPresenter } from './context/BookContextPresenter';
import { ThemeContextPresenter } from './context/ThemeContextPresenter';

function App() {
	return (
		<div className='App'>
			<ThemeContextPresenter>
				<AuthContextPresenter>
					<Navbar />
					<BookContextPresenter>
						<BookList />
					</BookContextPresenter>
					<ThemeToggle />
				</AuthContextPresenter>
			</ThemeContextPresenter>
		</div>
	);
}

export default App;
