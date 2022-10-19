import React, { useState } from 'react';
import { useBookContextPresenter } from '../context/BookContextPresenter';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

const BookForm = () => {
	const { isDarkTheme, light, dark } =
		useThemeContextPresenter();
	// const { addBook } = useBookContextPresenter();
	const { dispatch } = useBookContextPresenter();
	const theme = isDarkTheme ? dark : light;
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_BOOK', book: { title, author } });
		// addBook(title, author);
		setTitle('');
		setAuthor('');
	};

	return (
		<form
			style={{ background: theme.bg, color: theme.syntax }}
			onSubmit={handleSubmit}>
			<h3 className='book-form-title'>Add More Book</h3>
			<input
				type='text'
				placeholder='Book title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<input
				type='text'
				placeholder='Author name'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<input type='submit' value='add book' />
		</form>
	);
};

export default BookForm;
