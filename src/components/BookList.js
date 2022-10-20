import React from 'react';
import { useBookContextPresenter } from '../context/BookContextPresenter';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';
import BookDetails from './BookDetails';
import { v1 as uuid } from 'uuid';

const BookList = () => {
	const { isDarkTheme, light, dark } =
		useThemeContextPresenter();
	const { books } = useBookContextPresenter();
	const theme = isDarkTheme ? dark : light;
	return books.length > 0 ? (
		<div
			className='book-list'
			style={{ background: theme.bg, color: theme.syntax }}>
			<ul>
				{books.map((book) => {
					return (
						<BookDetails
							book={book}
							key={book.id + uuid()}
							theme={theme}
						/>
					);
				})}
			</ul>
		</div>
	) : (
		<div
			className='book-list'
			style={{ background: theme.bg, color: theme.syntax }}>
			No books to read. Try adding some or just enjoy your
			free time :)
		</div>
	);
};

export default BookList;
